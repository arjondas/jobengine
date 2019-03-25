import React from 'react';
import classes from './Content.css';
import Profile from '../../Profile/Profile';
import SearchTab from '../../JobSearch/JobSearch';
import Company from '../../Company/Company';

const content = (props) => {
    let preview = null;
    switch(props.tab.title) {
        case 'Profile' :
            preview = <Profile userData = {props.userData} update = {props.update} mainReload = {props.mainReload}/>
            break;
        case 'Search' :
            preview = <SearchTab noApply = {false}/>
            break;
        default :
            preview = <Company/>
            break;            
    }

    return (
        <div className = {classes.content}>
            {preview}
        </div>
    )
}

export default content;