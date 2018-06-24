import React, {Component} from 'react';
import classes from './Dashboard.css';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';

class Dashboard extends Component {
    state = {
        tabs : [
            {id: 1, title: "Profile", icon: "profile"},
            {id: 2, title: "Search", icon: "search"},
            {id: 3, title: "Messages", icon: "mail"},
            {id: 4, title: "Events", icon: "calendar"},
            {id: 5, title: "Connections", icon: "people"},
            {id: 6, title: "Support", icon: "support"}
        ],
        selectedTab : 1,
    }

    changeSelection = (id) => {
        this.setState({selectedTab: id});
    }

    render() {
        return (
            <div className = {classes.Dashboard}>
                <LeftSection tabs = {this.state.tabs} selection = {this.state.selectedTab} toggle = {this.changeSelection}/>
                <RightSection tabs = {this.state.tabs} selection = {this.state.selectedTab}/>
            </div>
        )
    }
}

export default Dashboard;