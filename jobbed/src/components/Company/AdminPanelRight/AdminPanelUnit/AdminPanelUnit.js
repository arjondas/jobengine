import React, {Component} from 'react';
import classes from './AdminPanelUnit.css';
import SmartButton from '../../../SmartButton/SmartButton';
import axios from 'axios';
import { resolve } from 'path';

class Unit extends Component {
    state = {
        buttonSettings : {
            nLength : "100px",
            fLength : "200px",
            sLength : "210px",
            wait : 3,
            nMessage : "Remove",
            sMessage : "Admin Removed Successfully",
            fMessage : "Unable to Remove Admin",
        }
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    removeHandler = () => {
        this.child.showLoading('loading');
        setTimeout(() => {
            const prepData = {
                token : localStorage.getItem('token'),
                user : {
                    email: this.props.unit.email,
                }
            }
            console.log('payload: '+prepData.user.email);
            axios.post('http://172.20.10.3:8080/company/'+this.props.companyID+'/admin-delete',prepData)
                .then(response => {
                    console.log(response);
                    this.child.changeStatus('success');
                    setTimeout(() => {
                        this.props.fetch();
                        if(response.data.selfDestruct) {
                            this.props.reload();
                        }
                    }, ((this.state.buttonSettings.wait*1000)+500));
                })
                .catch(error => {
                    this.child.changeStatus('failed');
                    console.log(error.response);
                });
        }, 1000);
    }

    render() {
        let styling = null;
        if(this.props.shouldDrawLine) {
            styling = ({
                borderBottom : "3px solid rgb(239,240,245)",
            })
        }
        return(
            <div className = {classes.unit} style = {styling}>
                <div className = {classes.left}>
                    Full Name:&nbsp;&nbsp;{this.props.unit.name}<br/><br/>Email:&nbsp;&nbsp;{this.props.unit.email}
                </div>
                <div className = {classes.right}>
                    <div className = {classes.rightOptions}>
                        <SmartButton ref = {instance => {this.child = instance}} settings = {this.state.buttonSettings} onClick = {this.removeHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Unit;