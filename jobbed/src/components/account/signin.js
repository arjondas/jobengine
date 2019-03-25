import React, {Component} from 'react';
import classes from './card.css';
import Icons from '../Icons/icons';
import SmartButton from '../SmartButton/SmartButton';
import axios from 'axios';

class SignIn extends Component {
    state = {
        form : [
            {id : 1, type : 'username', data : ''},
            {id : 2, type : 'password', data : ''}
        ],
        buttonSettings : {
            nLength : "90px",
            fLength : "120px",
            sLength : "190px",
            wait : 1,
            nMessage : "Sign In",
            sMessage : "Successfully Signed In",
            fMessage : "Sign In Failed",
            stop : true,
        }
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    };

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

    transitionHandler = () => {
        this.props.cancel();
        setTimeout(() => {
            this.props.verify();
        }, 1000);
    }

    signInHandler = () => {
        this.child.showLoading('loading');
        setTimeout(() => {
            const prepData = {
                user: {
                    username: this.getDataFor('username'),
                    password: this.getDataFor('password')
                }
            }
            axios.post('http://172.20.10.3:8080/signin',prepData)
                .then(response => {
                    console.log(response);
                    localStorage.setItem('token', response.data.token);
                    this.child.changeStatus('success');
                    setTimeout(() => {
                        this.transitionHandler();
                    }, ((this.state.buttonSettings.wait*1000)+1000));
                })
                .catch(error => {
                    this.child.changeStatus('failed');
                    console.log(error.response);
                });
        }, 2000);
    }

    render() {
        
        return (
            <div className = {classes.newBase}>
                    <div 
                        className = {classes.cancelButton}
                        onClick = {this.props.cancel}>
                        <Icons type = "cross" size = {25}/>
                    </div>
                    <div className = {classes.title}>
                        Sign In
                    </div>
                    <div className = {classes.note}>
                        No Account?<div className = {classes.link} onClick = {this.props.click}>&nbsp;Sign Up</div>
                    </div>
                    <div className = {classes.blackbox}>
                        <input className = {classes.formInput} type = "text" placeholder = "Username" onChange = {(event) => this.changeFieldHandler(event, 1)}/>
                    </div>
                    <div className = {classes.blackbox}>
                        <input className = {classes.formInput} type = "password" placeholder = "Password" onChange = {(event) => this.changeFieldHandler(event, 2)}/>
                    </div>
                    <div className = {classes.blackbox}>
                        {/* <button className = {classes.Button} onClick = {this.signInHandler} >Sign In</button> */}
                        <div className = {classes.rightShift}>
                            <SmartButton ref = {instance => {this.child = instance}} settings = {this.state.buttonSettings} onClick = {this.signInHandler}/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default SignIn;