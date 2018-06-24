import React from 'react';
import Job from './FeatJob/FeatJob';
import classes from './FeatJobs.css';

const jobs = (props) => {
    return(
        <div className = {classes.Jobs}>
            <Job/>
        </div>
    )
}

export default jobs;