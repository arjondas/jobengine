import React, {Component} from 'react';
import classes from './DashNav.css';
import NavBlocks from './NavBlock/NavBlocks';

class DashNav extends Component {
    render() {
        return(
            <table className = {classes.DashNav}>
                <tr className = {classes.NavTable}>
                    <th>&nbsp;&nbsp;Explore</th>
                </tr>
                <NavBlocks tabs = {this.props.tabs} selection = {this.props.selection} toggle = {this.props.toggle}/>
            </table>
        )
    }
}

export default DashNav;