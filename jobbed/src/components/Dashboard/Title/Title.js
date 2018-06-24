import React from 'react';
import classes from './Title.css';

const title = (props)=> {
    return (
        <div className = {classes.title} style = {{textAlign: props.align, width: props.width}}>
            <div style = {{padding: props.padding}}>
                {props.title}
            </div>
        </div>
    )
}

export default title;