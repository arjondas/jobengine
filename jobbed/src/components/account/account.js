import React, {Component} from 'react';
import Animate from 'react-move/Animate';
import {easeExpOut} from 'd3-ease';
import SignIn from './signin';
import SignUp from './signup';
import classes from './account.css';
import Icons from '../Icons/icons';

const animationDuration = 1000

class Account extends Component {
    state = {
        showOption : false,
        showSignUp : false,
        loggedIn : this.props.status,
    }

    showOptions = () => {
        const temp = this.state.showOption;
        console.log("Login Clicked");
        this.setState({
            showOption: !temp,
        });
        setTimeout(() => {
            this.setState({
                showSignUp: false,
            })
        }, animationDuration/2);
    }

    showSignUpOptions = () => {
        const tempOption = this.state.showOption;
        const temp = this.state.showSignUp;
        this.setState({
            showOption: !tempOption,
        })
        setTimeout(() => {
            this.setState({
                showSignUp: !temp,
                showOption: tempOption
            })
        }, animationDuration/2);
    }

    logOutHandler = () => {
        localStorage.setItem('token', null);
        localStorage.setItem('tabCompany', null);
        // this.state.loggedIn = false;
        console.log('logging out');
        this.props.logout();
        this.props.verify();
    }

    render() {
        let accountAction = null;
        if(this.props.status) {
            accountAction = (
                <div>
                    <button className = {classes.Button} onClick = {this.logOutHandler}><Icons type = "logout" size = {25}/></button>
                </div>
            )
        } else {
            let view = null;
            let details = null;
            if(this.state.showSignUp) {
                view = <SignUp click = {this.showSignUpOptions} cancel = {this.showOptions}/>
            } else {
                view = <SignIn verify = {this.props.verify} click = {this.showSignUpOptions} cancel = {this.showOptions}/>
            }
            let styling = null;
            if(this.state.showOption) {
                // view = details;
                styling = ({
                    color: "royalblue",
                })
            }
            accountAction = (
                <div>
                <button 
                    className = {classes.Button} 
                    onClick = {this.showOptions}
                    style = {styling}>
                    <Icons type = "login" size = {25}/>
                </button>
                <div className = {classes.account}>
                    <Animate
                        start={() => ({
                            x: 0,
                        })}
                        update={() => ({
                            x: [this.state.showOption ? -400 : 0],
                            timing: { duration: animationDuration, ease: easeExpOut },
                        })}
                        >
                        {(state) => {
                            const { x } = state;
                            return (
                            <div>
                                <div
                                    style={{
                                        position: 'fixed',
                                        WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                        transform: `translate3d(${x}px, 0, 0)`,
                                }}>
                                    {view}
                                </div>
                            </div>
                            );
                        }}
                    </Animate>
                </div>
            </div>
            )
        }
        // console.log("Account Settings loaded");
        return (
            <div>
                {accountAction}
            </div>
        )
    }
}


export default Account;
