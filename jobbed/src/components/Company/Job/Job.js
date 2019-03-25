import React, {Component} from 'react';
import classes from './Job.css';
import SmartButton from '../../SmartButton/SmartButton';
import Aux from '../../../hoc/Aux';
import axios from 'axios';
import Applicants from './Applicants/Applicants';

class Post extends Component {
    state = {
        details : null,
        buttonSettings : {
            nLength : "100px",
            fLength : "190px",
            sLength : "210px",
            wait : 3,
            nMessage : "Update",
            sMessage : "Details Updated Successfully",
            fMessage : "Unable to Update Details",
        }
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    componentDidMount() {
        if(this.props.ID !== null) {
            this.loadDataOnState(this.props.ID);
        }
    }

    changeFieldHandlerDetails = (event, type) => {
        if(type === "title") {
            const tempDetails = {...this.state.details};
            tempDetails.title = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "type") {
            const tempDetails = {...this.state.details};
            tempDetails.type = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "salary") {
            const tempDetails = {...this.state.details};
            tempDetails.salary = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "deadline") {
            const tempDetails = {...this.state.details};
            tempDetails.deadline = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "location") {
            const tempDetails = {...this.state.details};
            tempDetails.location = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "field") {
            const tempDetails = {...this.state.details};
            tempDetails.field = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "requirement") {
            const tempDetails = {...this.state.details};
            tempDetails.requirement = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "experience") {
            const tempDetails = {...this.state.details};
            tempDetails.experience = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "description") {
            const tempDetails = {...this.state.details};
            tempDetails.description = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "tags") {
            const tempDetails = {...this.state.details};
            tempDetails.tag = event.target.value;
            this.setState({details: tempDetails});
        } 
    }

    loadDataOnState = (ID) => {
        let URL = 'http://172.20.10.3:8080/job/'+ID+'/sort/cg';
        // let URL = 'http://127.0.0.1:4000/jobs/'+ID;
        axios.get(URL)
        .then(response => {
            console.log('Job List Package: '+response.data);
            this.setState({details: response.data.job});
        })
        .catch(error => {
            console.log("There was an error JOB.js");
        })
    }

    sortBy = (value) => {           // cgpa, exp
        let URL = 'http://172.20.10.3:8080/job/'+this.props.ID+'/sort/'+value;
        axios.get(URL)
        .then(response => {
            this.setState({details: response.data.job});
        })
        .catch(error => {
            console.log("Error sorting");
        })
    }

    jobUpdateHandler = () => {
        this.child.showLoading('loading');
        setTimeout(() => {
            const payload = {
                token: localStorage.getItem('token'),
                job : {
                    companyID : this.state.details.companyID,
                    companyName : this.state.details.companyName,
                    id : this.props.ID,
                    title : this.state.details.title,
                    description : this.state.details.description,
                    deadline : this.state.details.deadline,
                    salary : this.state.details.salary,
                    type : this.state.details.type,
                    field : this.state.details.field,
                    requirement : this.state.details.requirement,
                    experience : this.state.details.experience,
                    location : this.state.details.location,
                    tag : this.state.details.tag,
                }
            }
            let URL = 'http://172.20.10.3:8080/job/'+this.props.ID+'/update';
            // let URL = 'http://127.0.0.1:4000/jobs/'+this.props.ID;
            axios.post(URL,payload)
            .then(response => {
                this.child.changeStatus('success');
            })
            .catch(error => {
                this.child.changeStatus('failed');
                console.log(error);
            })
        }, 500);
    }

    render() {
        let view = null;
        if(this.state.details !== null) {
            let applicant = null;
            if(this.state.details.applicants === null) {
                applicant = (
                    <div style = {{width: "100%", textAlign: "center", color: "lightgrey", fontSize: "20px"}}>
                        None applied yet
                    </div>
                )
            } else {
                if(this.state.details.applicants.length > 0) {
                    applicant = (
                        <div>
                            <strong>Applicant List:</strong><br/><br/>
                            Sort by : 
                            <div className = {classes.sort} onClick = {()=> this.sortBy('cgpa')}>CGPA</div>&nbsp;&nbsp;&nbsp;&nbsp;<div className = {classes.sort} onClick = {()=> this.sortBy('exp')}>Experience</div>
                            <br/><br/>
                            <Applicants jobID = {this.props.ID} list = {this.state.details.applicants}/>
                        </div>
                    )
                }
            }
            view = (
                <div className = {classes.post}>
                    <div className = {classes.pointLeft}>
                        <strong>Job Title</strong> : 
                        <div className = {classes.pointRight}>
                            <input className = {classes.formInput} id = "title" type = "text" value = {this.state.details.title} onChange = {(event) => this.changeFieldHandlerDetails(event, "title")}></input>
                        </div><br/><br/><br/>
                        <strong>Job Type</strong> : 
                        <div className = {classes.pointRight}>
                            <input className = {classes.formInput} id = "type" type = "text" value = {this.state.details.type} onChange = {(event) => this.changeFieldHandlerDetails(event, "type")}></input>
                        </div><br/><br/><br/>
                        <strong>Salary</strong> : 
                        <div className = {classes.pointRight}>
                            <input className = {classes.formInput} id = "salary" type = "text" value = {this.state.details.salary} onChange = {(event) => this.changeFieldHandlerDetails(event, "salary")}></input>
                        </div><br/><br/><br/>
                        <strong>Deadline</strong> :
                        <div className = {classes.pointRight}>
                            <input className = {classes.formInput} id = "deadline" type = "text" value = {this.state.details.deadline} onChange = {(event) => this.changeFieldHandlerDetails(event, "deadline")}></input>
                        </div><br/><br/><br/>
                        <strong>Location</strong> :
                        <div className = {classes.pointRight}>
                            <input className = {classes.formInput} id = "location" type = "text" value = {this.state.details.location} onChange = {(event) => this.changeFieldHandlerDetails(event, "location")}></input>
                        </div><br/><br/><br/>
                        <strong>Job Field</strong> :
                        <div className = {classes.pointRight}>
                            <input className = {classes.formInput} id = "field" type = "text" value = {this.state.details.field} onChange = {(event) => this.changeFieldHandlerDetails(event, "field")}></input>
                        </div><br/><br/><br/>
                        <strong>Prerequisite</strong> : <br/><br/>
                            <textarea className = {classes.description} id = "requirement" value = {this.state.details.requirement} onChange = {(event) => this.changeFieldHandlerDetails(event, "requirement")}></textarea>
                        <br/><br/>
                        <strong>Experience</strong> :
                        <div className = {classes.pointRight}>
                            <input className = {classes.formInput} id = "experience" type = "text" value = {this.state.details.experience} onChange = {(event) => this.changeFieldHandlerDetails(event, "experience")}></input>
                        </div><br/><br/><br/>
                        <strong>Description</strong> : <br/><br/>
                            <textarea className = {classes.description} id = "description" value = {this.state.details.description} onChange = {(event) => this.changeFieldHandlerDetails(event, "description")}></textarea>
                        <br/><br/>
                        <strong>Search Tags</strong> : <br/><br/>
                            <textarea className = {classes.description} id = "tags" value = {this.state.details.tag} onChange = {(event) => this.changeFieldHandlerDetails(event, "tags")}></textarea>
                        <br/><br/>
                        <div className = {classes.pointRight}>
                            <SmartButton ref = {instance => {this.child = instance}} settings = {this.state.buttonSettings} onClick = {this.jobUpdateHandler}/>
                        </div><br/><br/><br/>
                        {applicant}
                    </div>
                </div>
            )   
        } else {
            view = (
                <div className = {classes.empty}>
                    <br/>
                    Select a Job Title
                </div>
            )
        }
        return(
            <Aux>
                {view}
            </Aux>
        )
    }
}

export default Post;