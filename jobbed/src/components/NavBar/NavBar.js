import React from 'react';
import classes from './NavBar.css';

const navBar = (props) => {
    return (
        <div className = {classes.NavBarSide}>
            {props.children}
        </div>
    );
}

export default navBar;