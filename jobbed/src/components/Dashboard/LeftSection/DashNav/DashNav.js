import React, {Component} from 'react';
import classes from './DashNav.css';
import NavBlocks from './NavBlock/NavBlocks';
class DashNav extends Component {
    render() {
        let view = null;
        if(this.props.title !== null) {
            <tr className = {classes.NavTable}>
                <th>&nbsp;&nbsp;{this.props.title}</th>
            </tr>
        }
        return(
            <table className = {classes.DashNav}>
                {view}
                <NavBlocks tabs = {this.props.tabs} selection = {this.props.selection} toggle = {this.props.toggle}/>
            </table>
        )
    }
}

export default DashNav;