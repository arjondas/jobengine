import React, {PureComponent} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Display.css';
import Jobs from './FeatJobs/FeatJobs';

class Display extends PureComponent {
    
    render() {
        return(
            <Aux>
                <div className = {classes.UpDisplay}></div>
                <div className = {classes.Display}>
                    <Jobs/>
                </div>
                <div className = {classes.DownDisplay}></div>
            </Aux>
        )
    }

}

export default Display;