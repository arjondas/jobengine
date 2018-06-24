import React from 'react';
import classes from './Canvas.css';
import Dashboard from '../Dashboard/Dashboard';
const canvas = () => {
    return (
        <div className = {classes.Canvas}>
            <Dashboard/>
        </div>
    )
}

export default canvas;