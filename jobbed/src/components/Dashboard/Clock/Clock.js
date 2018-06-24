import React, {Component} from 'react';
import Clock from 'react-live-clock';
import classes from './Clock.css';

class LiveClock extends Component {
    render() {
        return(
            <div className = {classes.clockContainer}>
                <Clock format={'hh:mm'}/>
            </div>
        )
    }
}

export default LiveClock;
