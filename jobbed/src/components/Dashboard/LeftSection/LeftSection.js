import React from 'react';
import classes from './LeftSection.css';
import Title from '../Title/Title';
import Summary from './ProfileSummary/ProfileSummary';
import DashNav from './DashNav/DashNav';

const left = (props) => {
    return(
        <div className = {classes.Left}>
            <Title title = "Dash Board"/>
            <div className = {classes.LeftSection}>
                <Summary/>
                <DashNav tabs = {props.tabs} selection = {props.selection} toggle = {props.toggle}/>
            </div>
        </div>
    )
}

export default left;