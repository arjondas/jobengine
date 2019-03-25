import React, {Component} from 'react';
import classes from './Status.css';
import SmartButton from '../../../SmartButton/SmartButton';
import axios from 'axios';
class Status extends Component {
    state = {
        details : null,
        buttonSettings : {
            nLength : "100px",
            fLength : "120px",
            sLength : "180px",
            wait : 3,
            nMessage : "Apply",
            sMessage : "Applied Successfully",
            fMessage : "Failed",
        }
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
        console.log(this.props.index);
    }

    upperFirst = (value) => {
        return value.charAt(0).toUpperCase() + value.substring(1);
    }

    applyForTheJob = () => {
        this.child.showLoading('loading');
        setTimeout(() => {
            const URL = "http://172.20.10.3:8080/job/"+this.props.ID+"/apply";
            const payload = {
                token: localStorage.getItem('token'),
            }
            axios.post(URL,payload)
            .then(response => {
                this.child.changeStatus('success');
            })
            .catch(error => {
                this.child.changeStatus('failed');
            })
        }, 1000);
    }

    render() {
        let view = null;
        let salary = null;
        let prereq = null;
        let description = null;
        if(this.props.details !== null) {
            if(this.props.details.salary === null || this.props.details.salary === '') {
                salary = "Not Specified";
            } else {
                salary = this.props.details.salary;
            }
            if(this.props.details.requirement === null || this.props.details.requirement === '') {
                prereq = "Not Specified";
            } else {
                prereq = this.props.details.requirement;
            }
            if(this.props.details.description === null || this.props.details.description === '') {
                description = "Not Specified";
            } else {
                description = this.props.details.description;
            }
        }
        let button = null;
        if(!this.props.noApply) {
            button = (
                <SmartButton ref = {instance => {this.child = instance}} settings = {this.state.buttonSettings} onClick = {this.applyForTheJob}/>
            )
        }
        if(this.props.ID !== null) {
            view = (
                <div className = {classes.view}>
                    Details<br/><br/>
                    <div className = {classes.title}>
                        <strong>Title:</strong>
                        <div className = {classes.describe}>
                            {this.upperFirst(this.props.details.title)}
                        </div>
                    </div><br/>
                    <div className = {classes.title}>
                        <strong>Company:</strong>
                        <div className = {classes.describe}>
                            {this.upperFirst(this.props.details.companyName)}
                        </div>
                    </div><br/>
                    <div className = {classes.title}>
                        <strong>Location:</strong>
                        <div className = {classes.describeSmall}>
                            {this.upperFirst(this.props.details.location)}
                        </div>
                    </div><br/>
                    <div className = {classes.title}>
                        <strong>Type: </strong>{this.upperFirst(this.props.details.type)}
                    </div><br/>
                    <div className = {classes.title}>
                        <strong>Deadline: </strong>{this.props.details.deadline}
                    </div><br/>
                    <div className = {classes.title}>
                        <strong>Salary:</strong>
                        <div className = {classes.describeSmall}>
                            {salary}
                        </div>
                    </div><br/>
                    <div className = {classes.title}>
                        <strong>Experience:</strong>
                        <div className = {classes.describeSmall}>
                            {this.props.details.experience}
                        </div>
                    </div><br/>
                    <div className = {classes.title}>
                        <strong>Prerequisite:</strong>
                        <div className = {classes.describeSmall}>
                            {prereq}
                        </div>
                    </div><br/>
                    <div className = {classes.title}>
                        <strong>Description:</strong>
                        <div className = {classes.describeLight}>
                            {description}
                        </div>
                    </div><br/>
                    {button}
                </div>
            )
        } else {
            view = (
                <div className = {classes.view} style = {{color: "lightgrey"}}>
                    <br/><br/><br/><br/>
                    Select a Job for Details
                </div>
            )
        }
        return(
            <div className = {classes.status}>
                {view}
            </div>
        )
    }
}

export default Status;