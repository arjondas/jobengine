import React from 'react';
import classes from './searchbar.css';
import Icon from '../icons';
const bar = (props) => {
    return (
        <div className = {classes.bar} >
            <input className = {classes.customInput} type = "text" placeholder = "Profession" onChange = {props.change}/>
            <input className = {classes.customInput} type = "text" placeholder = "Location"/>
        </div>
    )
}

export default bar;