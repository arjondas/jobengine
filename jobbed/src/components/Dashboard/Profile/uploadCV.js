import React, {Component} from 'react';
import classes from './uploadCV.css';
import SmartButton from '../../SmartButton/SmartButton';
import axios from 'axios';

class Upload extends Component {
    state = {
        description: '',
        file: '',
        buttonSettings : {
            nLength : "80px",
            sLength : "140px",
            fLength : "120px",
            wait : 3,
            nMessage : "Upload",
            sMessage : "Upload successful",
            fMessage : "Upload failed",
        },
    }

    constructor(props) {
        super(props);
        this.childButton = React.createRef();
    }

    onChange = (event) => {
        switch (event.target.name) {
          case 'file':
            this.setState({ file: event.target.files[0] });
            break;
          default:
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    uploadCVHandler = () => {
        this.child.showLoading('loading');
        setTimeout(() => {
            const file = this.state.file;
            let formData = new FormData();
            formData.append('file', file);
            formData.append('token', localStorage.getItem('token'));
            let URL = 'http://172.20.10.3:8080/upload-cv';
            axios.post(URL, formData)
            .then(response => {
                this.child.changeStatus('success');
                console.log(response);
            })
            .catch(error => {
                this.child.changeStatus('failed');
                console.log(error);
            });
        }, 1000);
    }

    render() {
        return(
            <div className = {classes.box}>
                <div className = {classes.container}>
                    Upload CV<br/><br/><br/>
                    <input type = "file" accept = "application/pdf" name = "file" className = {classes.submit} onChange = {(event) => this.onChange(event)}></input>
                </div>
                <div className = {classes.tableCenter}>
                    <div className = {classes.tableCell}>
                        <SmartButton ref = {instance => {this.child = instance}} settings = {this.state.buttonSettings} onClick = {this.uploadCVHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload;