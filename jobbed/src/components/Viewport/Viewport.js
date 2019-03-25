/// The viewport will contain the whole site, which has two portions, the canvas and the nav-bar
import React, {Component} from 'react';
import classes from './Viewport.css';
import Canvas from '../Canvas/Canvas';
import Account from '../account/account';
import axios from 'axios';
import Icons from '../Icons/icons';

class Viewport extends Component {
    state = {
        selected: 'home',
        loggedIn: false,
        userData: {
            DateOfBirth: null,
            ID: null,
            Picture: null,
            adminCompanyID: null,
            currentJob: null,
            designation: null,
            cgpa: null,
            email: null,
            firstname: null,
            lastname: null,
            location :null,
            name: null,
            username: null,
            street: null,
            state: null,
            zip: null,
            country: null,
            experience: null,
            description: null,
            admin: null,
            role: null,
        }
    }

    changeSelection = (select) => {
        this.setState({
            selected: select,
        })
    }

    forceUpdateHandler = (tab) => {
        this.verifyLogIN();
        this.changeSelection(tab);
    }

    logoutHandler = () => {
        this.changeSelection('home');
        this.setState({loggedIn: false});
    }

    verifyLogIN = () => {
        // console.log('verifying');
        const token = localStorage.getItem('token');
        const payload = {
            token: token,
        }
        console.log('login '+payload);
        axios.post('http://172.20.10.3:8080/current-user', payload)
        .then(response =>  {
            console.log('@viewport: '+response);
            this.setState({userData: response.data.user});
            /*
            if(token == null) {
                console.log('saving token');
                localStorage.setItem('token', response.data.token);
            }*/
            this.setState({loggedIn: true});
        })
        .catch(error => {
            console.log('@viewport: '+error);
            localStorage.setItem('token',null);
            // this.setState({loggedIn: false});
            // this.setState({loggedIn: true});
        })
    }

    reload = () => {
        this.verifyLogIN();
        this.changeSelection('dashboard');
    }

    componentDidMount() {
        // console.log('verifying');
        this.verifyLogIN();
        // this.setState({loggedIn: true});
    }

    render() {
        let stylingHome = null;
        let stylingDashboard = null;
        let stylingCompanyBoard = null;
        let dashboard = null;
        if(this.state.selected === 'home') {
            stylingHome = ({
                color: "royalblue",
            })
        } else if(this.state.selected === 'dashboard') {
            stylingDashboard = ({
                color: "royalblue"
            })
        } else if(this.state.selected === 'company') {
            stylingCompanyBoard = ({
                color: "royalblue"
            })
        }
        if(this.state.loggedIn) {
            dashboard = (
                <div className = {classes.container}>
                    <button className = {classes.Button} style = {stylingDashboard} onClick = {() => this.changeSelection('dashboard')}><Icons type = "dashboard" size = {25}/></button>
                </div>
            )
        }

        // console.log('user: '+this.state.userData.username);
        // console.log('Viewport loggedIn: '+this.state.loggedIn);

        let companyBoard = null;
        console.log('companyID: '+this.state.userData.adminCompanyID);
        if(this.state.userData.adminCompanyID !== 0 && this.state.userData.adminCompanyID !== null && this.state.loggedIn) {
            companyBoard = (
                <div className = {classes.container}>
                    <button className = {classes.Button} style = {stylingCompanyBoard} onClick = {() => this.changeSelection('company')}><Icons type = "company" size = {25}/></button>
                </div>
            )
        }

        return (
            <div className = {classes.Viewport}>
                <div className = {classes.Canvas}>
                    <Canvas selection = {this.state.selected} userData = {this.state.userData} reload = {this.reload} mainReload = {this.forceUpdateHandler}/>
                </div>
                <div className = {classes.Navbar}>
                    <div className = {classes.DummyNav}>
                        <div className = {classes.container}>
                            <button className = {classes.Button} style = {stylingHome} onClick = {() => this.changeSelection('home')} ><Icons type = "home" size = {25}/></button>
                        </div>
                        {dashboard}
                        {companyBoard}
                        <div className = {classes.container}>
                            <Account status = {this.state.loggedIn} verify = {() => this.verifyLogIN()} logout = {() => this.logoutHandler() }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Viewport;