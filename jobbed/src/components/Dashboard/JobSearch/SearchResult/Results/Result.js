import React, {Component} from 'react';
import classes from './Result.css';

class Result extends Component {

    upperFirst = (value) => {
        return value.charAt(0).toUpperCase() + value.substring(1);
    }

    render() {
        let title = null;
        let type = null;
        let deadline = null;
        let salary = null;
        let company = null;
        let location = null;
        let description = null;
        title = (
            <div className = {classes.field}>{this.upperFirst(this.props.title)}</div>
        )
        type = (
            <div className = {classes.type}>{this.upperFirst(this.props.type)}</div>
        )
        if(this.props.deadline !== null) {
            deadline = (
                <div className = {classes.deadline}>Deadline: {this.props.deadline}</div>
            )
        }
        if(this.props.salary !== null && this.props.salary !== '') {
            salary = (
                <div className = {classes.salary}>
                    <div className = {classes.salBisc}>{this.props.salary}</div>
                </div>
            )
        }
        if(this.props.name !== null) {
            company = (
                <div className = {classes.name}>Company: {this.upperFirst(this.props.name)}</div>
            )
        }
        if(this.props.location !== null) {
            location = (
                <div className = {classes.address}>Location: {this.upperFirst(this.props.location)}</div>
            )
        }
        if(this.props.description !== null) {
            let describe = this.props.description.substring(0, 100) + "...";
            description = (
                <div className = {classes.description}>{this.upperFirst(describe)}<div className = {classes.more} onClick = {() => this.props.toggle(this.props.ID)}>more</div></div>
            )
        }

        return(
            <div className = {classes.result}>
                {title}
                <div className = {classes.multi}>
                    {type}
                    {deadline}
                    {salary}
                </div>
                <div className = {classes.multi2}>
                    {company}
                    {location}
                </div>
                {description}
            </div>
        )
    }
}

export default Result;