import React, {Component} from 'react';
import classes from './Result.css';

class Result extends Component {
    render() {
        return(
            <div className = {classes.result}>
                <div className = {classes.field}>{this.props.field}</div>
                <div className = {classes.multi}>
                    <div className = {classes.type}>{this.props.type}</div>
                    <div className = {classes.deadline}>Deadline: {this.props.deadline}</div>
                    <div className = {classes.salary}>
                        <div className = {classes.salBisc}>
                            {this.props.salary}
                        </div>
                    </div>
                </div>
                <div className = {classes.multi2}>
                    <div className = {classes.name}>Company: {this.props.name}</div>
                    <div className = {classes.address}>Address: {this.props.address}</div>
                    <div className = {classes.experience}>{this.props.year}</div>
                </div>
                <div className = {classes.description}>{this.props.description}</div>
            </div>
        )
    }
}

export default Result;