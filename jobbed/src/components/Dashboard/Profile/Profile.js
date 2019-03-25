import React, {Component} from 'react';
import classes from './Profile.css';
// import Icons from '../../Icons/icons';
import axios from 'axios';
import UploadCV from './uploadCV';
import UploadPP from './uploadPic';
import SmartButton from '../../SmartButton/SmartButton';

class Profile extends Component {
    state = {
        details : {
            ID : this.props.userData.ID,
            name : this.props.userData.name,
            firstname : this.props.userData.firstname,
            lastname : this.props.userData.lastname,
            username : this.props.userData.username,
            cgpa : this.props.userData.cgpa,
            DateOfBirth : this.props.userData.DateOfBirth,
            email : this.props.userData.email,
            street : this.props.userData.street,
            state : this.props.userData.state,
            zip : this.props.userData.zip,
            country : this.props.userData.country,
            currentJob : this.props.userData.currentJob,
            experience : this.props.userData.experience,
            description : this.props.userData.description,
            designation : this.props.userData.designation,
            admin : this.props.userData.admin,
            adminCompanyID : this.props.userData.adminCompanyID,
            company : null,
        },
        buttonSettings : {
            nLength : "100px",
            fLength : "190px",
            sLength : "210px",
            wait : 3,
            nMessage : "Update",
            sMessage : "Details Updated Successfully",
            fMessage : "Unable to Update Details",
        },
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    onDateChange = date => {
        const tempDetails = {...this.state.details};
        tempDetails.DateOfBirth = date;
        this.setState({details: tempDetails});
    }

    changeFieldHandlerDetails = (event, type) => {
        if(type === "birth") {
            const tempDetails = {...this.state.details};
            tempDetails.DateOfBirth = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "email") {
            const tempDetails = {...this.state.details};
            tempDetails.email = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "street") {
            const tempDetails = {...this.state.details};
            tempDetails.street = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "state") {
            const tempDetails = {...this.state.details};
            tempDetails.state = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "zip") {
            const tempDetails = {...this.state.details};
            tempDetails.zip = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "country") {
            const tempDetails = {...this.state.details};
            tempDetails.country = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "currentJob") {
            const tempDetails = {...this.state.details};
            tempDetails.currentJob = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "experience") {
            const tempDetails = {...this.state.details};
            tempDetails.experience = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "description") {
            const tempDetails = {...this.state.details};
            tempDetails.description = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "designation") {
            const tempDetails = {...this.state.details};
            tempDetails.designation = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "company") {
            const tempDetails = {...this.state.details};
            tempDetails.company = event.target.value;
            this.setState({details: tempDetails});
        } else if(type === "cgpa") {
            const tempDetails = {...this.state.details};
            tempDetails.cgpa = event.target.value;
            this.setState({details: tempDetails});
        }
    }

    profileUpdateHandler = () => {
        this.child.showLoading('loading');
        setTimeout(() => {
            const payload = {
                token: localStorage.getItem('token'),
                user : {
                    ID : this.state.details.ID,
                    name : this.state.details.name,
                    firstname : this.props.userData.firstname,
                    lastname : this.props.userData.lastname,
                    username : this.state.details.username,
                    description : this.state.details.description,
                    cgpa : this.state.details.cgpa,
                    email : this.state.details.email,
                    currentJob : this.state.details.currentJob,
                    designation : this.state.details.designation,
                    street : this.state.details.street,
                    state : this.state.details.state,
                    zip : this.state.details.zip,
                    country : this.state.details.country,
                    DateOfBirth : this.state.details.DateOfBirth,
                    experience : this.state.details.experience,
                    admin : this.props.userData.admin,
                    adminCompanyID : this.props.userData.adminCompanyID,
                }
            }
            let URL = 'http://172.20.10.3:8080/user/update';
            // let URL = 'http://127.0.0.1:4000/jobs/'+this.props.ID;
            axios.post(URL,payload)
            .then(response => {
                this.child.changeStatus('success');
                setTimeout(() => {
                    this.props.mainReload('dashboard');
                }, 1000);
            })
            .catch(error => {
                this.child.changeStatus('failed');
                console.log(error);
            })
        }, 500);
    }

    companyCreationHandler = () => {
        const payload = {
            token : localStorage.getItem('token'),
            company : {
                name : this.state.details.company,
            }
        }
        console.log(payload.company.name);
        axios.post('http://172.20.10.3:8080/company',payload)
        .then(response => {
            setTimeout(() => {
                this.props.mainReload('dashboard');
            }, 1000);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render () {
        let styling = null;
        let personalDetails = (
            <div className = {classes.box}>
                Personal Details<br/><br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>Full Name</strong> : <div className = {classes.pointRight}>{this.state.details.name}</div>
                </div><br/>
                <div className = {classes.pointLeft}>
                    <strong>User Name</strong> : 
                    <div className = {classes.pointRight}>
                        <div className = {classes.cookie}>{this.state.details.username}</div>
                    </div>
                </div><br/>
                <div className = {classes.pointLeft}>
                    <strong>Date of Birth</strong> :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className = {classes.pointRight}>
                        <input type = "text" className = {classes.formInput} placeHolder = {'YYYY/MM/DD'} value = {this.state.details.DateOfBirth} onChange = {(event) => this.changeFieldHandlerDetails(event, "birth")}></input>
                    </div>
                </div><br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>Email</strong> :
                    <div className = {classes.pointRight}>
                        <input type = "text" className = {classes.formInput} placeHolder = {'example@email.com'} value = {this.state.details.email} onChange = {(event) => this.changeFieldHandlerDetails(event, "email")}></input>
                    </div>
                </div><br/>
                <div className = {classes.pointLeft}>
                    <strong>CGPA</strong> :
                    <div className = {classes.pointRight}>
                        <input type = "text" className = {classes.formInput} placeHolder = {'CGPA'} value = {this.state.details.cgpa} onChange = {(event) => this.changeFieldHandlerDetails(event, "cgpa")}></input>
                    </div>
                </div><br/>
            </div>    
        )
    
        let addressDetails = (
            <div className = {classes.box}>
                Address Details<br/><br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>Street</strong> :
                    <div className = {classes.pointRight}>
                        <input type = "text" className = {classes.formInput} placeHolder = {'Street'} value = {this.state.details.street} onChange = {(event) => this.changeFieldHandlerDetails(event, "street")}></input>
                    </div>
                </div><br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>State</strong> :
                    <div className = {classes.pointRight}>
                        <input type = "text" className = {classes.formInput} placeHolder = {'State'} value = {this.state.details.state} onChange = {(event) => this.changeFieldHandlerDetails(event, "state")}></input>
                    </div>
                </div><br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>Zip Code</strong> :
                    <div className = {classes.pointRight}>
                        <input type = "text" className = {classes.formInput} placeHolder = {'Zip'} value = {this.state.details.zip} onChange = {(event) => this.changeFieldHandlerDetails(event, "zip")}></input>
                    </div>
                </div><br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>Country</strong> :
                    <div className = {classes.pointRight}>
                        <input type = "text" className = {classes.formInput} placeHolder = {'Country'} value = {this.state.details.country} onChange = {(event) => this.changeFieldHandlerDetails(event, "country")}></input>
                    </div>
                </div><br/>
            </div>
        )
    
        let aboutMyself = (
            <div className = {classes.box}>
                About Myself<br/><br/><br/>
                <textarea className = {classes.description} placeHolder = {'Write about yourself'} value = {this.state.details.description} onChange = {(event) => this.changeFieldHandlerDetails(event, "description")}></textarea>
                {/* <input type = "text" className = {classes.formInput} placeHolder = {''} style = {{height: "200px", width: "100%", verticalAlign: "0"}}/> */}
            </div>
        )
    
        let professionDetails = (
            <div className = {classes.box}>
                Profession Details<br/><br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>Works at</strong> :
                    <div className = {classes.pointRight}>
                        <input type = "text" className = {classes.formInput} placeHolder = {'Institute Name'} value = {this.state.details.currentJob} onChange = {(event) => this.changeFieldHandlerDetails(event, "currentJob")}></input>
                    </div>
                </div><br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>Designation</strong> :
                    <div className = {classes.pointRight}>
                        <input type = "text" className = {classes.formInput} placeHolder = {'Designation'} value = {this.state.details.designation} onChange = {(event) => this.changeFieldHandlerDetails(event, "designation")}></input>
                    </div>
                </div><br/><br/>
                <div className = {classes.pointLeft}>
                    <strong>Years of Experience</strong> :
                    <div className = {classes.pointRight}>
                        <input type = "text" className = {classes.formInput} placeHolder = {'Experience'} value = {this.state.details.experience} onChange = {(event) => this.changeFieldHandlerDetails(event, "experience")}></input>
                    </div>
                </div><br/><br/>
    
            </div>
        )
    
        let profilePicture = (
            <div className = {classes.box}>
                Upload Profile Picture<br/><br/><br/>
                <input type = "file" accept = "image/*" className = {classes.submit}></input>
            </div>
        )
    
        let uploadCV = (
            <div className = {classes.box}>
                Upload CV<br/><br/><br/>
                <input type = "file" accept = "application/pdf" className = {classes.submit}></input>
            </div>
        )
        let createCompany = null;
        if(this.props.userData.admin === null) {
            createCompany = (
                <div className = {classes.box}>
                    Add a Company<br/><br/><br/>
                    <div className = {classes.pointLeft}>
                        <strong>Institute Name</strong> :
                        <div className = {classes.pointRight}>
                            <input type = "text" className = {classes.formInput} placeHolder = {'Institute'} onChange = {(event) => this.changeFieldHandlerDetails(event,"company")}></input>
                            <br/><br/>
                            <button className = {classes.companyButton} onClick = {this.companyCreationHandler}>Create Company</button>
                        </div>
                    </div><br/>
                </div>
            )
        }
    
        return (
            <div className = {classes.profileMain}>
                <div className = {classes.blockLeft}>
                    {personalDetails}<br/><br/>
                    {addressDetails}<br/><br/>
                    {aboutMyself}<br/><br/>
                    <SmartButton ref = {instance => {this.child = instance}} settings = {this.state.buttonSettings} onClick = {this.profileUpdateHandler}/>
                </div>
                <div className = {classes.blockRight}>
                    {/* {profilePicture}<br/><br/> */}
                    <UploadPP update = {this.props.update}/><br/><br/>
                    {professionDetails}<br/><br/>
                    {/* {uploadCV}<br/><br/> */}
                    <UploadCV/><br/><br/>
                    {createCompany}
                </div>
            </div>
        )
    }
}

export default Profile;