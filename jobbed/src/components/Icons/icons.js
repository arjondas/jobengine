import React, {PureComponent} from 'react';
import {Icon} from 'react-icons-kit';
// import {ic_search} from 'react-icons-kit/md/ic_search';
import {magnifying_glass} from 'react-icons-kit/ikons/magnifying_glass'
import {logIn} from 'react-icons-kit/ionicons/logIn';
import {logOut} from 'react-icons-kit/ionicons/logOut';
import {ic_close} from 'react-icons-kit/md/ic_close';
import {ic_people} from 'react-icons-kit/md/ic_people';
import {ribbonB} from 'react-icons-kit/ionicons/ribbonB';
import {eye} from 'react-icons-kit/typicons/eye';
import {calendar} from 'react-icons-kit/entypo/calendar';
import {profile} from 'react-icons-kit/icomoon/profile';
import {mail} from 'react-icons-kit/entypo/mail';
import {ic_help} from 'react-icons-kit/md/ic_help';
import {home} from 'react-icons-kit/fa/home';
import {ic_dashboard} from 'react-icons-kit/md/ic_dashboard';
import {institution} from 'react-icons-kit/fa/institution';
import {ic_add_circle_outline} from 'react-icons-kit/md/ic_add_circle_outline';
import {menu} from 'react-icons-kit/entypo/menu';
import {spinner8} from 'react-icons-kit/icomoon/spinner8';
import classes from './icons.css';
class Icons extends PureComponent {
    render() {
        let iconType = null;
        let styling = ({
            color : this.props.color,
            height: this.props.size,
            width: this.props.size,
        })

        if(this.props.type === "search"){  
            iconType = (
                <Icon icon = {magnifying_glass} size = {this.props.size}/>
            )
        }else if(this.props.type === "login"){
            iconType = (
                <Icon icon = {logIn} size = {this.props.size}/>
            )
        }else if(this.props.type === "logout"){
            iconType = (
                <Icon icon = {logOut} size = {this.props.size}/>
            )
        }else if(this.props.type === "cross") {
            iconType = (
                <Icon icon = {ic_close} size = {this.props.size}/>
            )
        }else if(this.props.type === "people") {
            iconType = (
                <Icon icon = {ic_people} size = {this.props.size}/>
            )
        }else if(this.props.type === "badge") {
            iconType = (
                <Icon icon = {ribbonB} size = {this.props.size}/>
            )
        }else if(this.props.type === "eye") {
            iconType = (
                <Icon icon = {eye} size = {this.props.size}/>
            )
        }else if(this.props.type === "calendar") {
            iconType = (
                <Icon icon = {calendar} size = {this.props.size}/>
            )
        }else if(this.props.type === "profile") {
            iconType = (
                <Icon icon = {profile} size = {this.props.size}/>
            )
        }else if(this.props.type === "support") {
            iconType = (
                <Icon icon = {ic_help} size = {this.props.size}/>
            )
        }else if(this.props.type === "mail") {
            iconType = (
                <Icon icon = {mail} size = {this.props.size}/>
            )
        }else if(this.props.type === "home") {
            iconType = (
                <Icon icon = {home} size = {this.props.size}/>
            )
        }else if(this.props.type === "dashboard") {
            iconType = (
                <Icon icon = {ic_dashboard} size = {this.props.size}/>
            )
        }else if(this.props.type === "company") {
            iconType = (
                <Icon icon = {institution} size = {this.props.size}/>
            )
        }else if(this.props.type === "add") {
            iconType = (
                <Icon icon = {ic_add_circle_outline} size = {this.props.size}/>
            )
        }else if(this.props.type === "menu") {
            iconType = (
                <Icon icon = {menu} size = {this.props.size}/>
            )
        }else if(this.props.type === "spinner") {
            iconType = (
                <Icon icon = {spinner8} size = {this.props.size}/>
            )
        }
        return(
            <div className = {classes.Icon} style = {styling}>
                {iconType}
            </div>
        )
    }
}

export default Icons;