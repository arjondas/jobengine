import React from 'react';
import classes from './Header.css';
import Title from '../../Title/Title';
import Info from '../../InfoSection/InfoSec';

const header = (props) => {
    return(
        <div className = {classes.header}>
            <Title title = {props.tab.title} align = "left" padding = "0 0 0 30px"/>
            <Info padding = "0 20px 0 0"/>
        </div>
    )
}

export default header;