import React from 'react';
import classes from './searchbar.css';
import Icons from '../Icons/icons';
const bar = (props) => {
    return (
        <div className = {classes.bar} >
            <div className = {classes.searchIcon}><Icons type = "search" size = "35px"/></div>
            <input className = {classes.customInput} type = "text" placeholder = "Profession" onChange = {props.change}/>
            <input className = {classes.customInput} type = "text" placeholder = "Location"/>
        </div>
    )
}

export default bar;