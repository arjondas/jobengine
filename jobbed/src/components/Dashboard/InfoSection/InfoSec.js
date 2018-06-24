import React from 'react';
import Clock from '../Clock/Clock';
import classes from './InfoSec.css';

const info = (props) => {
    return(
        <div className = {classes.container}>
            <div className = {classes.infoSec}>
                <div style = {{padding: props.padding}}>
                    <Clock/>
                </div>
            </div>
        </div>
    );
}

export default info;