import React, {Component} from 'react';
import classes from './SmartButton.css';
import { setTimeout } from 'timers';
import {PulseLoader} from 'react-spinners';
let buttonWidth = null;
class SmartButton extends Component {
    state = {
        buttonMessageNormal : 'Add as Admin',
        buttonMessageSuccess : 'Successfully added Admin',
        buttonMessageFail : 'User Name not found', /// No Internet Connection
        buttonStatus : 'normal',
        messageStatus : 'normal',
        loadingStatus : 'normal',
        idle : true,
        idleStatus : true,
    }

    constructor(props) {
        super(props);
    }

    changeStatus = (stat) => {
        if(this.state.idleStatus) {
            this.setState({buttonStatus: stat, messageStatus: 'loading', idle: false, idleStatus: false});
            setTimeout(() => {
                this.setState({messageStatus: stat});
            }, 250)
            if(stat === 'success' && this.props.settings.stop !== null && this.props.settings.stop) {
                return
            } else {
                setTimeout(() => {
                    this.setState({messageStatus: 'white'});
                }, this.props.settings.wait * 1000);
                setTimeout(() => {
                    this.setState({buttonStatus: 'normal', messageStatus: 'normal'});
                }, (this.props.settings.wait * 1000) - 250);
                setTimeout(() => {
                    this.setState({idle: true, idleStatus: true});
                }, (this.props.settings.wait * 1000) + 250);
            }
        }
    }

    showLoading = (stat) => {
        if(this.state.idle) {
            this.setState({buttonStatus: stat, messageStatus: 'normal', idle: false});
            setTimeout(() => {
                this.setState({messageStatus: stat})
            }, 250);
        }
    }

    render() {
        // console.log('butWid: '+classes.ButtonWidth.);
        // let styling = ({width: this.props.settings.nLength})
        let styling = ({
            width : this.props.settings.nLength,
        })
        let buttonMessage = this.props.settings.nMessage;
        
        if(this.state.buttonStatus === 'success') {
            styling = ({
                backgroundColor: 'rgba(0,0,0,0)',
                color: 'white',
                width: this.props.settings.sLength,
            });
            if(this.state.messageStatus === 'success') {
                styling = ({
                    backgroundColor: 'rgb(0,165,114)',
                    color: 'white',
                    width: this.props.settings.sLength,
                })
                buttonMessage = this.props.settings.sMessage;
            } else if(this.state.messageStatus === 'white') {
                styling = ({
                    backgroundColor: 'rgb(0,165,114)',
                    color: 'rgb(0,165,114)',
                    width: this.props.settings.sLength,
                })
                buttonMessage = this.props.settings.sMessage;
            } else if(this.state.messageStatus === 'loading') {
                styling = ({
                    backgroundColor: 'rgb(0,165,114)',
                    color: 'transparent',
                    width: this.props.settings.sLength,
                })
                buttonMessage = (<PulseLoader size = {5} color = "transparent"/>);
            }
        }
        if(this.state.buttonStatus === 'failed') {
            styling = ({
                backgroundColor: 'rgba(0,0,0,0)',
                color: 'white',
                width: this.props.settings.fLength,
            })
            if(this.state.messageStatus === 'failed') {
                styling = ({
                    backgroundColor: 'rgb(234,60,83)',
                    color: 'white',
                    width: this.props.settings.fLength,
                })
                buttonMessage = this.props.settings.fMessage;
            } else if(this.state.messageStatus === 'white') {
                styling = ({
                    backgroundColor: 'rgb(234,60,83)',
                    color: 'rgb(234,60,83)',
                    width: this.props.settings.fLength,
                })
                buttonMessage = this.props.settings.fMessage;
            } else if(this.state.messageStatus === 'loading') {
                styling = ({
                    backgroundColor: 'rgb(234,60,83)',
                    color: 'transparent',
                    width: this.props.settings.fLength,
                })
                buttonMessage = (<PulseLoader size = {5} color = "transparent"/>);
            }
        }

        if(this.state.buttonStatus === 'loading') {
            styling = ({
                backgroundColor: 'royalblue',
                color: 'rgba(0,0,0,0)',
                width: this.props.settings.nLength,
            })
            if(this.state.messageStatus === 'loading') {
                styling = ({
                    backgroundColor: 'royalblue',
                    color: 'rgba(0,0,0,0)',
                    width: '65px',
                })
                buttonMessage = (<PulseLoader size = {5} color = "white"/>);
            }
        }

        return (
            <div>
                <button className = {classes.Button} style = {styling} onClick = {this.props.onClick}>{buttonMessage}</button>
                {/* <button onClick = {() => this.changeStatus('success')}></button> */}
            </div>
        )
    }
}

export default SmartButton;