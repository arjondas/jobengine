import React, {Component} from 'react';
import classes from './LeftSection.css';
import Title from '../Title/Title';
import Summary from './ProfileSummary/ProfileSummary';
import DashNav from './DashNav/DashNav';

class Left extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    reloadSummary = () => {
        this.child.updateHandler();
    }

    render() {
        return(
            <div className = {classes.Left}>
                <Title title = "Dash Board"/>
                <div className = {classes.LeftSection}>
                    <Summary ref = {instance => (this.child = instance)} userData = {this.props.userData}/>
                    <DashNav tabs = {this.props.tabs} selection = {this.props.selection} toggle = {this.props.toggle} title = "Explore"/>
                </div>
            </div>
        )
    }
}

export default Left;