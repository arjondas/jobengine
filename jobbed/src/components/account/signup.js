import React, {Component} from 'react';
import Icons from '../Icons/icons';
import classes from './card.css';
import axios from 'axios';
import SmartButton from '../SmartButton/SmartButton';
class SignUp extends Component {
    
    state = {
        form : [
            {id: 1, type: 'firstname', data: ''},
            {id: 2, type: 'lastname', data: ''},
            {id: 3, type: 'username', data: ''},
            {id: 4, type: 'email', data: ''},
            {id: 5, type: 'password', data: ''}
        ],
        buttonSettings : {
            nLength : "90px",
            fLength : "170px",
            sLength : "190px",
            wait : 1,
            nMessage : "Sign Up",
            sMessage : "Successfully Signed Up",
            fMessage : "Sign Up Failed",
            stop : true,
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

    signUpHandler = () => {
        this.child.showLoading('loading');
        setTimeout(() => {
            const prepData = {
                user: {
                    firstname: this.getDataFor('firstname'),
                    lastname: this.getDataFor('lastname'),
                    username: this.getDataFor('username'),
                    email: this.getDataFor('email'),
                    password: this.getDataFor('password')
                }
            }
            axios.post('http://172.20.10.3:8080/signup',prepData)
                .then(response => {
                    this.child.changeStatus('success');
                    setTimeout(() => {
                        this.props.cancel();
                    }, ((this.state.buttonSettings.wait*1000)+1000));
                    console.log(response);
                })
                .catch(error => {
                    this.child.changeStatus('failed');
                    console.log(error.response)
                });
        }, 2000);
    }

    render() {
        return (
            <div className = {classes.newBase}>
                <div 
                    className = {classes.cancelButton}
                    onClick = {this.props.cancel}>
                    <Icons type = "cross" size = {20}/>
                </div>
                <div className = {classes.title}>
                    Sign Up
                </div>
                <div className = {classes.note}>
                    Already have an account?<div className = {classes.link} onClick = {this.props.click}>&nbsp;Sign In</div>
                </div>
                <div className = {classes.blackbox}>
                    <input className = {classes.formInput} type = "text" placeholder = "First Name" onChange = {(event) => this.changeFieldHandler(event, 1)}/>
                </div>
                <div className = {classes.blackbox}>
                    <input className = {classes.formInput} type = "text" placeholder = "Last Name" onChange = {(event) => this.changeFieldHandler(event, 2)}/>
                </div>
                <div className = {classes.blackbox}>
                    <input className = {classes.formInput} type = "text" placeholder = "Username" onChange = {(event) => this.changeFieldHandler(event, 3)}/>
                    {/* <div className = {classes.warning}>Username already taken</div> */}
                </div>
                <div className = {classes.blackbox}>
                    <input className = {classes.formInput} type = "email" placeholder = "Email" onChange = {(event) => this.changeFieldHandler(event, 4)}/>
                </div>
                <div className = {classes.blackbox}>
                    <input className = {classes.formInput} type = "password" placeholder = "Password" onChange = {(event) => this.changeFieldHandler(event, 5)}/>
                </div>
                <div className = {classes.blackbox}>
                    <input className = {classes.formInput} type = "password" placeholder = "Confirm Password" onChange = {(event) => this.changeFieldHandler(event, 6)}/>
                </div>
                <div className = {classes.blackbox}>
                    <div className = {classes.rightShift}>
                        <SmartButton ref = {instance => {this.child = instance}} settings = {this.state.buttonSettings} onClick = {this.signUpHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;