import React, {Component} from 'react';
import classes from './Dashboard.css';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';

class Dashboard extends Component {
    state = {
        tabs : [
            {ID: 1, title: "Profile", icon: "profile"},
            {ID: 2, title: "Search", icon: "search"},
        ],
        selectedTab : 1,
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    changeSelection = (id) => {
        this.setState({selectedTab: id});
    }

    reload = () => {
        this.child.reloadSummary();
    }

    render() {
        return (
            <div className = {classes.Dashboard}>
                <LeftSection ref = {instance => {this.child = instance}} tabs = {this.state.tabs} selection = {this.state.selectedTab} toggle = {this.changeSelection} userData = {this.props.userData}/>
                <RightSection tabs = {this.state.tabs} selection = {this.state.selectedTab} userData = {this.props.userData} update = {this.reload} mainReload = {this.props.mainReload}/>
            </div>
        )
    }
}

export default Dashboard;