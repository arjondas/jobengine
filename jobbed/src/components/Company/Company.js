import React, {Component} from 'react';
import classes from './Company.css';
import axios from 'axios';
import Admin from './AdminPanel/Admin';
import Post from './Job/JobList/JobPost';
import Display from './RightDisplay';

class Company extends Component {
    state = {
        companyData : {
            name: null,
            description: null,
            email: null,
            admin: null,
            address: null,
            phone: null,
        },
        selected : localStorage.getItem('tabCompany'),
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    reloadCompanyPage = () => {
        this.child.reloadDisplay();
    }

    changeSelection = (select) => {
        this.setState({
            selected: select,
        });
        localStorage.setItem('tabCompany', select);
    }

    fetchCompanyInformation = () => {
        if(this.props.companyID !== null) {
            const payload = {
                token: localStorage.getItem('token')
            }
            axios.post('http://172.20.10.3:8080/company/'+this.props.companyID,payload)
            .then(response => {
                console.log(response);
                this.setState({companyData: response.data.company});
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    componentDidMount() {
        this.fetchCompanyInformation();
    }

    render () {
        console.log('tab: '+this.state.selected);
        return(
            <div className = {classes.company}>
            <div className = {classes.title}>
                <div className = {classes.titleLeft}>
                    Control Panel: {this.state.companyData.name}
                </div>
                <div className = {classes.titleRight}>
                    Logged In as: {this.props.userData.name}
                </div>
            </div> 
            <div className = {classes.ContentBody}>
                <div className = {classes.blockLeft}>
                    <Admin onClick = {() => this.changeSelection('admin')} selected = {this.state.selected} companyID = {this.props.companyID} fetch = {this.fetchCompanyInformation}/>
                    <br/><br/>
                    <Post onClick = {() => this.changeSelection('post')} selected = {this.state.selected} companyID = {this.props.companyID} fetch = {this.fetchCompanyInformation} reload = {this.reloadCompanyPage}/>
                </div>
                <div className = {classes.blockRight}>
                    <Display ref = {instance => {this.child = instance}} selected = {this.state.selected} list = {this.state.companyData.admin} fetch = {this.fetchCompanyInformation} reload = {this.props.reload} companyID = {this.props.companyID}/>
                </div>
            </div>
            </div>
        )
    }
}

export default Company;