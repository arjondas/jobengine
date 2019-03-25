import React from 'react';
import classes from './home.css';
import Search from '../Dashboard/JobSearch/JobSearch';
const home = () => {
    return (
        <div className = {classes.home}>
            <Search noApply = {true}/>
        </div>
    )
}

export default home;