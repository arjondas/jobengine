import React from 'react';
import classes from './card.css';

const signin = (props) => {
    return (
        <div className = {classes.Base}>
            <br/><p1 onClick = {this.toggleSignInMenu}>Sign In</p1>
            <p></p>
            <input className = {classes.customInput} type = "email" placeholder = "Email"/>
            <p></p>
            <input className = {classes.customInput} type = "password" placeholder = "Password"/>
            <p></p><br/>
            <p2>No account? </p2><p3 onClick = {props.click}>&nbsp; Create new account</p3><br/><p></p><br/>
            <button className = {classes.Button}>Sign In</button><br/><p></p>
        </div>
    )
}

export default signin;