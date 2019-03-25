import React from 'react';
import classes from './Canvas.css';
import Home from '../Home/home';
import Dashboard from '../Dashboard/Dashboard';
import Company from '../Company/Company';

const canvas = (props) => {
    let view = null;
    if(props.selection === 'home') {
        view = <Home/>
    } else if(props.selection === 'dashboard') {
        view = <Dashboard userData = {props.userData} mainReload = {props.mainReload} />
    } else if(props.selection === 'company') {
        view = <Company companyID = {props.userData.adminCompanyID} userData = {props.userData} reload = {props.reload} update = {props.update}/>
    }
    return (
        <div className = {classes.Canvas}>
            {view}
        </div>
    )
}

export default canvas;