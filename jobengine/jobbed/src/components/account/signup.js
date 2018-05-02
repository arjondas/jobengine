import React from 'react';
import classes from './card.css';

const signup = (props) => {
    return(
        <div className = {classes.Base}>
            <br/><p1 onClick = {this.toggleSignInMenu}>Sign Up</p1><br/><p2></p2><br/>
            <p2>Already have an account?</p2><p3 onClick = {props.click}>&nbsp; Sign In</p3><br/>
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
            <button className = {classes.Button}>Sign Up</button><br/><p></p>
        </div>
    )
}

export default signup;