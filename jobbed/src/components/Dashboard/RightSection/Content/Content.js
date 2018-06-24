import React from 'react';
import classes from './Content.css';
import SearchTab from '../../JobSearch/JobSearch';

const content = () => {
    return (
        <div className = {classes.content}>
            <SearchTab/>
        </div>
    )
}

export default content;