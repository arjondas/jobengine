import React, {Component} from 'react';
import classes from './SearchResult.css';
import Results from './Results/Results';

class Result extends Component {

    state = {
        result : [
            {id: 1,compName: "Apple", field: "Software Engineer", deadLine: "25 Jun 2018", salary: "USD 100,000/year", expYear: "4+", description: "Hard Working", jobType: "Full Time", address: "Scilicon Valley"},
            {id: 2,compName: "Google", field: "Developer", deadLine: "20 Jun 2018", salary: "USD 200,000/year", expYear: "7+", description: "Testing Expert", jobType: "Full Time", address: "Los Angeles"},
            {id: 3,compName: "Microsoft", field: "System Analyst", deadLine: "13 August 2018", salary: "USD 130,000/year", expYear: "3+", description: "Very good with data. Has to work in our Data mining facility to analysis product success.", jobType: "Full Time", address: "Neveda, Las Vagas"},
            {id: 4,compName: "Nesco Resource", field: "Electromechanical Service Technician- AVCA", deadLine: "12 July 2018", salary: "USD 200,000/year", expYear: "7+", description: "NESCO Resource has an excellent new opportunity for an Electromechanical Service Technician for our rapidly growing client! This is a temporary opportunity with the potential to become permanent! The Electromechanical Service Technician will handle prevent", jobType: "Full Time", address: "Hesperia, CA, United States"},
        ]
    }

    render() {
        return(
            <div className = {classes.resultPanel}>
                <Results list = {this.state.result}/>
            </div>
        )
    }
}

export default Result;