import React, {Component} from 'react';
import classes from './Applicant.css';
import SmartButton from '../../../SmartButton/SmartButton';
import PDF from '../../../PDFViewer/PDF';
import axios from 'axios';
class Applicant extends Component {
    state = {
        buttonSettingsCV : {
            nLength : "100px",
            sLength : "190px",
            fLength : "180px",
            wait : 2,
            nMessage : "View CV",
            sMessage : "CV loaded Successfully",
            fMessage : "Unable to load CV",
        },
        buttonSettingsApprove : {
            nLength : "100px",
            sLength : "120px",
            fLength : "180px",
            wait : 2,
            nMessage : "Accept",
            sMessage : "Accepted",
            fMessage : "An error occurred",
        },
        buttonSettingsDisApprove : {
            nLength : "100px",
            sLength : "120px",
            fLength : "180px",
            wait : 2,
            nMessage : "Decline",
            sMessage : "Declined",
            fMessage : "An error occurred",
        },
        show : false,
        update : false,
    }

    constructor(props) {
        super(props);
        this.cv = React.createRef();
        this.accept = React.createRef();
        this.decline = React.createRef();
    }

    updateHandler = () => {
        const temp = this.state.update;
        this.setState({update: !temp});
    }

    showDetails = (value) => {
        this.setState({show: value})
    }

    acceptApplication = (ID,JID) => {
        let URL = 'http://172.20.10.3:8080/job/'+JID+'/accept';
        this.accept.showLoading('loading');
        setTimeout(() => {
            let payload = {
                token : localStorage.getItem('token'),
                user : {
                    id : ID,
                }
            }
            axios.post(URL,payload)
            .then(res => {
                this.accept.changeStatus('success');
            })
            .catch(err => {
                this.accept.changeStatus('failed');
            })
        }, 1000);
    }

    declineApplication = (ID,JID) => {
        let URL = 'http://172.20.10.3:8080/job/'+JID+'/decline';
        this.decline.showLoading('loading');
        setTimeout(() => {
            let payload = {
                token : localStorage.getItem('token'),
                user : {
                    id : ID,
                }
            }
            axios.post(URL,payload)
            .then(res => {
                this.decline.changeStatus('success');
            })
            .catch(err => {
                this.decline.changeStatus('failed');
            })
        }, 1000);
    }

    render() {
        let detail = null;
        let URL = null;
        if(this.state.update) {
            URL = null;
            setTimeout(() => {
                this.updateHandler();
            }, 100);
        }else {
            URL = "http://172.20.10.3:8080/files/pp_"+this.props.ID;
            // URL = "url(http://172.20.10.3:8080/files/pp_"+this.props.userData.ID+")";
        }
        if(this.state.show) {
            detail = (
                <div className = {classes.viewer}>
                    <div className = {classes.exit} onClick = {() => this.showDetails(false)}></div>
                    <div className = {classes.expand}>
                        <div className = {classes.card}>
                            <div className = {classes.profilePic}>
                                <img className = {classes.image} src = {URL}/>
                            </div><br/>
                            <div className = {classes.left}>
                                <strong>Full Name :</strong><div className = {classes.right}>{this.props.name}</div>
                            </div><br/>
                            <div className = {classes.left}>
                                <strong>User Name :</strong><div className = {classes.right}>{this.props.username}</div>
                            </div>
                            <div className = {classes.left}>
                                <strong>Email :</strong><div className = {classes.right}>{this.props.email}</div>
                            </div>
                            <div className = {classes.left}>
                                <strong>Date of Birth :</strong><div className = {classes.right}>{this.props.DateOfBirth}</div>
                            </div>
                            <div className = {classes.left}>
                                <strong>CGPA :</strong><div className = {classes.right}>{this.props.cgpa}</div>
                            </div>
                            <div className = {classes.left}>
                                <strong>Years of experience :</strong><div className = {classes.right}>{this.props.experience}</div>
                            </div>
                            <div className = {classes.left}>
                                <strong>Works At :</strong><div className = {classes.right}>{this.props.currentJob}</div>
                            </div>
                            <div className = {classes.left}>
                                <strong>Designation :</strong><div className = {classes.right}>{this.props.designation}</div>
                            </div>
                            <div className = {classes.left}>
                                <strong>Street :</strong><div className = {classes.right}>{this.props.street}</div>
                            </div>
                            <div className = {classes.left}>
                                <strong>State :</strong><div className = {classes.right}>{this.props.state}</div>
                            </div>
                            <div className = {classes.left}>
                                <strong>Country :</strong><div className = {classes.right}>{this.props.country}</div>
                            </div>
                        </div>
                        <div className = {classes.block}>
                        <br/>
                            <div className = {classes.buttonCollection}>
                                <SmartButton ref = {instance => {this.decline = instance}} settings = {this.state.buttonSettingsDisApprove} onClick = {() => {this.declineApplication(this.props.ID,this.props.jobID)}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<SmartButton ref = {instance => {this.accept = instance}} settings = {this.state.buttonSettingsApprove} onClick = {() => {this.acceptApplication(this.props.ID, this.props.jobID)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div className = {classes.applicant}>
                <div className = {classes.left}>
                <strong className = {classes.details} onClick = {() => this.showDetails(true)}>User Name : {this.props.username}</strong>
                    <div className = {classes.right}>
                        <PDF ID = {this.props.ID}/>
                    </div>
                </div>
                <br/>
                {detail}
            </div>
        )
    }
}

export default Applicant;


/*
<div className = {classes.buttons}>
                    <SmartButton ref = {instance => {this.accept = instance}} settings = {this.state.buttonSettingsApprove} onClick = {this.acceptApplication}/>
                    </div>
                    <div className = {classes.buttons}>
                    <SmartButton ref = {instance => {this.decline = instance}} settings = {this.state.buttonSettingsDisApprove} onClick = {this.declineApplication}/>
                    </div>
                    */