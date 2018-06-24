import React, {PureComponent} from 'react';
import Animate from 'react-move/Animate';
import {easeExpOut} from 'd3-ease';
import SignIn from './signin';
import SignUp from './signup';
import classes from './account.css';
import Icons from '../Icons/icons';
import axios from 'axios';

const animationDuration = 1000

class Account extends PureComponent {
    state = {
        showOption : false,
        showSignUp : false,
    }
    signUpHandler = () => {
        const data = {
            
        }

        axios.post('http://172.20.10.3:8080/signup',);
    }

    showOptions = () => {
        const temp = this.state.showOption;
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

    render() {
        let view = null;
        if(this.state.showSignUp) {
            view = <SignUp click = {this.showSignUpOptions} cancel = {this.showOptions}/>
        } else {
            view = <SignIn click = {this.showSignUpOptions} cancel = {this.showOptions}/>
        }
        let styling = null;
        if(this.state.showOption) {
            styling = ({
                borderBottom: "3px solid #1de9b6",
                color: "#1de9b6",
            })
        }
        return (
            <div>
                <button 
                    className = {classes.Button} 
                    onClick = {this.showOptions}
                    style = {styling}>
                    <Icons type = "login" size = {'30px'}/>
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
}


export default Account;
