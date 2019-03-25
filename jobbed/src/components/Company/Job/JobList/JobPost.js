import React, {Component} from 'react';
import classes from './JobPost.css';
import SmartButton from '../../../SmartButton/SmartButton';
import axios from 'axios';

class Post extends Component {
    state = {
        form : [
            {id: 1, type: 'jobTitle', data: ''},
            {id: 2, type: 'jobType', data: ''},
            {id: 3, type: 'salary', data: ''},
            {id: 4, type: 'deadline', data: ''},
            {id: 5, type: 'location', data: ''},
            {id: 6, type: 'field', data: ''},
            {id: 7, type: 'requirement', data: ''},
            {id: 8, type: 'experience', data: ''},
            {id: 9, type: 'description', data: ''},
            {id: 10, type: 'tag', data: ''},
        ],
        buttonSettings : {
            nLength : "120px",
            fLength : "170px",
            sLength : "190px",
            wait : 3,
            nMessage : "Post Job",
            sMessage : "Job Posted Successfully",
            fMessage : "Unable to Post Job",
        }
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    changeFieldHandler = (event, dataID) => {
        const dataIndex = this.state.form.findIndex(n => {
            return n.id === dataID;
        });
        const tempForm = {...this.state.form[dataIndex]};
        tempForm.data = event.target.value;
        const tempFormList = [...this.state.form];
        tempFormList[dataIndex] = tempForm;
        this.setState({form: tempFormList});
    }

    getDataFor = (dataType) => {
        const dataIndex = this.state.form.findIndex(n => {
            return n.type === dataType;
        });
        return this.state.form[dataIndex].data;
    }

    jobPostHandler = () => {
        this.child.showLoading('loading');
        setTimeout(() => {
            const payload = {
                token: localStorage.getItem('token'),
                job : {
                    title : this.getDataFor('jobTitle'),
                    description : this.getDataFor('description'),
                    salary : this.getDataFor('salary'),
                    deadline : this.getDataFor('deadline'),
                    type : this.getDataFor('jobType'),
                    field : this.getDataFor('field'),
                    requirement : this.getDataFor('requirement'),
                    experience : this.getDataFor('experience'),
                    location : this.getDataFor('location'),
                    tag : this.getDataFor('tag'),
                }
            }
            let URL = 'http://172.20.10.3:8080/company/'+this.props.companyID+'/job';
            axios.post(URL,payload)
            .then(response => {
                this.child.changeStatus('success');
                setTimeout(() => {
                    this.props.reload();
                }, this.state.buttonSettings.wait * 1000 + 500);
            })
            .catch(error => {
                this.child.changeStatus('failed');
                console.log(error);
            })
        }, 500);
    }

    render() {
        let styling = null;
        if(this.props.selected === 'post') {
            styling = ({
                color: "royalblue",
                boxShadow: "0 2px 25px rgba(0, 0, 0, 0.15)",
            })
        }

        return(
            <div className = {classes.post} style = {styling} onClick = {this.props.onClick}>
                Job Post Management
                <br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>Job Title</strong> : 
                    <div className = {classes.pointRight}>
                        <input className = {classes.formInput} type = "text" placeholder = "Job Title" onChange = {(event) => this.changeFieldHandler(event, 1)}></input>
                    </div><br/><br/><br/>
                    <strong>Job Type</strong> : 
                    <div className = {classes.pointRight}>
                        <input className = {classes.formInput} type = "text" placeholder = "Job Type" onChange = {(event) => this.changeFieldHandler(event, 2)}></input>
                    </div><br/><br/><br/>
                    <strong>Salary</strong> : 
                    <div className = {classes.pointRight}>
                        <input className = {classes.formInput} type = "text" placeholder = "Salary" onChange = {(event) => this.changeFieldHandler(event, 3)}></input>
                    </div><br/><br/><br/>
                    <strong>Deadline</strong> :
                    <div className = {classes.pointRight}>
                        <input className = {classes.formInput} type = "text" placeholder = "YYYY/MM/DD" onChange = {(event) => this.changeFieldHandler(event, 4)}></input>
                    </div><br/><br/><br/>
                    <strong>Location</strong> :
                    <div className = {classes.pointRight}>
                        <input className = {classes.formInput} type = "text" placeholder = "Location" onChange = {(event) => this.changeFieldHandler(event, 5)}></input>
                    </div><br/><br/><br/>
                    <strong>Job Field</strong> :
                    <div className = {classes.pointRight}>
                        <input className = {classes.formInput} type = "text" placeholder = "Field" onChange = {(event) => this.changeFieldHandler(event, 6)}></input>
                    </div><br/><br/><br/>
                    <strong>Prerequisite</strong> : <br/><br/>
                    <textarea className = {classes.description} placeholder = 'Requirements for the Job' onChange = {(event) => this.changeFieldHandler(event, 7)}></textarea>
                    <br/><br/>
                    <strong>Experience</strong> :
                    <div className = {classes.pointRight}>
                        <input className = {classes.formInput} type = "text" placeholder = "Years of Experience" onChange = {(event) => this.changeFieldHandler(event, 8)}></input>
                    </div><br/><br/><br/>
                    <strong>Description</strong> : <br/><br/>
                    <textarea className = {classes.description} placeholder = 'Describe the Job' onChange = {(event) => this.changeFieldHandler(event, 9)}></textarea>
                    <br/><br/>
                    <strong>Search Tags</strong> : <br/><br/>
                    <textarea className = {classes.description} placeholder = 'Provide Search Tags Separated with Comma. e.g. Lawyer, Consultant, Doctor, Engineer' onChange = {(event) => this.changeFieldHandler(event, 10)}></textarea>
                    <br/><br/>
                    <div className = {classes.pointRight}>
                        <SmartButton ref = {instance => {this.child = instance}} settings = {this.state.buttonSettings} onClick = {this.jobPostHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;