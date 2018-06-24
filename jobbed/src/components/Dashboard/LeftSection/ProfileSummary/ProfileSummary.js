import React from 'react';
import classes from './ProfileSummary.css';
import Icons from '../../../Icons/icons';

const profile = (props) => {
    let iconsSize = 30;
    return(
        <div className = {classes.summary}>
            <div className = {classes.profile}>
                <div className = {classes.photo}>Photo</div>
                <div className = {classes.name}>Steve Jobs</div>
                <div className = {classes.designation}>Former CEO of Apple</div>
                <div className = {classes.stats}>
                    <div className = {classes.stat1}>
                        <Icons type = "eye" size = {iconsSize}/>
                        <div className = {classes.numbers}>+1</div>
                    </div>
                    <div className = {classes.stat2}>
                        <Icons type = "people" size = {iconsSize}/>
                        <div className = {classes.numbers}>+1</div>
                    </div>
                    <div className = {classes.stat3}>
                        <Icons type = "badge" size = {iconsSize}/>
                        <div className = {classes.numbers}>+1</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile;