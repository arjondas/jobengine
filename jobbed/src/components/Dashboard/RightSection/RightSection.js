import React from 'react';
import classes from './RightSection.css';
import Header from './Header/Header';
import Content from './Content/Content';

const right = (props) => {
    return(
        <div className = {classes.RightSection}>
            <Header tab = {props.tabs[props.selection - 1]}/>
            <Content/>
        </div>
    )
}

export default right;