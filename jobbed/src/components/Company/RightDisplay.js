import React, {Component} from 'react';
import AdminRight from './AdminPanelRight/AdminRight';
import JobList from './Job/JobList/JobList';
import Aux from '../../hoc/Aux';
import classes from './RightDisplay.css';

class Display extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    reloadDisplay = () => {
        this.child.getCompanyJobList();
    }

    render() {
        let view = null;
        let styling = ({
            overflow : "scroll",
        });
        if(this.props.selected === 'admin') {
            view = (
                <div className = {classes.displayAdmin}>
                    <AdminRight list = {this.props.list} fetch = {this.props.fetch} reload = {this.props.reload} companyID = {this.props.companyID}/>
                </div>
            )
        } else if(this.props.selected === 'post') {
            view = (
                <div className = {classes.displayList}>
                    <JobList ref = {instance => {this.child = instance}} companyID = {this.props.companyID} reload = {this.props.reload}/>
                </div>
            )
        } else {
            view = (
                <div style = {{color: "lightgray", fontSize: "26px"}}>
                    <br/><br/><br/><br/>
                    Select a Panel
                </div>
            )
        }

        return(
            <Aux>{view}</Aux>
        )
    }
}

export default Display;