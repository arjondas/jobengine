import React, {Component} from 'react';
import Icons from '../Icons/icons';
import classes from './card.css';
import axios from 'axios';

class SignUp extends Component {

    state = {
        name : 'tahsin',
        username : 'tahsynx',
        email : 'proton@tahynx.com',
        password : 'tahsintahsin',
    }

    signUpHandler = () => {

        const data = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('http://172.20.10.3:8080/signup',data)
            .then(response => {
                console.log(response);
            });
    }

    changeFieldHandler = (event, ) => {

    }

    render() {
        return(
            <div className = {classes.Base}>
                <div 
                    className = {classes.cancelButton}
                    onClick = {this.props.cancel}>
                    <Icons type = "cross" size = "25px"/>
                </div>
                <br/><p1 onClick = {this.toggleSignInMenu}>Sign Up</p1><br/><p2></p2><br/>
                <p2>Already have an account?</p2><p3 onClick = {this.props.click}>&nbsp; Sign In</p3><br/>
                <input className = {classes.customInput} type = "text" placeholder = "First Name"/>
                <p></p>
                <input className = {classes.customInput} type = "text" placeholder = "Last Name"/>
                <p></p>
                <input className = {classes.customInput} type = "email" placeholder = "Email"/>
                <p></p>
                <input className = {classes.customInput} type = "password" placeholder = "Password"/>
                <p></p>
                <input className = {classes.customInput} type = "password" placeholder = "Confirm Password"/>
                <p></p><br/>
                <button className = {classes.Button} onClick = {this.signUpHandler} >Sign Up</button><br/><p></p>
            </div>
        )
    }
}

export default SignUp;