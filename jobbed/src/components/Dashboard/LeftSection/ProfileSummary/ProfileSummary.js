import React, {Component} from 'react';
import classes from './ProfileSummary.css';
import PDF from '../../../PDFViewer/PDF';
class Profile extends Component {
    state = {
        update : false,
    }

    updateHandler = () => {
        const temp = this.state.update;
        this.setState({update: !temp});
    }

    render() {
        let thereBeLight = null;
        if(this.props.userData.designation != null) {
            thereBeLight = this.props.userData.designation+" at "+this.props.userData.currentJob;
        }
        let URL = null;
        if(this.state.update) {
            URL = null;
            setTimeout(() => {
                this.updateHandler();
            }, 100);
        }else {
            URL = "http://172.20.10.3:8080/files/pp_"+this.props.userData.ID;
            // URL = "url(http://172.20.10.3:8080/files/pp_"+this.props.userData.ID+")";
        }
        return(
            <div className = {classes.summary}>
                <div className = {classes.profile}>
                    <img className = {classes.image} src = {URL}/>
                    {/* <div className = {classes.photo} style = {{backgroundImage: URL}}></div> */}
                    <div className = {classes.name}>{this.props.userData.name}</div>
                    <div className = {classes.designation}>{thereBeLight}</div>
                    <div className = {classes.stats}>
                        <PDF ID = {this.props.userData.ID}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Profile;