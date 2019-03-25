import React, {Component} from 'react';
import classes from './Admin.css';
import SmartButton from '../../SmartButton/SmartButton';
import axios from 'axios';

class Admin extends Component {
    state = {
        form : [
            {id: 1, type: 'email', data: ''}
        ],
        buttonSettings : {
            nLength : "120px",
            fLength : "170px",
            sLength : "190px",
            wait : 5,
            nMessage : "Add as Admin",
            sMessage : "Admin Added Successfully",
            fMessage : "Unable to Add Admin",
        }
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    changeFieldHandler = (event, dataID) => {
        const dataIndex = this.state.form.findIndex(n => {
            return n.id === dataID;
        });
        const tempForm = {...this.state.form[dataIndex]};
        tempForm.data = event.target.value;
        const tempFormList = [...this.state.form];
        tempFormList[dataIndex] = tempForm;
        this.setState({form: tempFormList});
    }

    getDataFor = (dataType) => {
        const dataIndex = this.state.form.findIndex(n => {
            return n.type === dataType;
        });
        return this.state.form[dataIndex].data;
    }

    updateHandler = () => {
        this.child.showLoading('loading');
        setTimeout(() => {
            console.log(this.getDataFor('email'));
            const prepData = {
                token : localStorage.getItem('token'),
                user : {
                    email: this.getDataFor('email')
                }
            }
            axios.post('http://172.20.10.3:8080/company/'+this.props.companyID+'/admin',prepData)
                .then(response => {
                    this.child.changeStatus('success');
                    this.props.fetch();
                    console.log(response);
                })
                .catch(error => {
                    this.child.changeStatus('failed');
                    console.log(error.response)
                });
        }, 500);
    }

    render() {
        let styling = null;
        if(this.props.selected === 'admin') {
            styling = ({
                color: "royalblue",
                boxShadow: "0 2px 25px rgba(0, 0, 0, 0.15)",
            })
        }
        return (
            <div className = {classes.admin} style = {styling} onClick = {this.props.onClick}>
                Administrator Management
                <br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>Email</strong> : 
                    <div className = {classes.pointRight}>
                        <input className = {classes.formInput} type = "text" placeholder = "Email" onChange = {(event) => this.changeFieldHandler(event, 1)}></input>
                    </div>
                </div><br/><br/>
                <div className = {classes.pointRight}>
                    <SmartButton ref = {instance => {this.child = instance}} settings = {this.state.buttonSettings} onClick = {this.updateHandler}/>
                </div>
            </div>
        )
    }
}

export default Admin;