import React, {Component} from 'react';
import Search from './Search/Search';
import Status from './StatusBoard/Status';
import axios from 'axios';

class JobSearch extends Component {
    state = {
        result : null,
        jobID : null,
        details : null,
    }

    changeJOBID = (id) => {
        const index = this.state.result.findIndex(n => {
            return n.ID === id;
        })
        this.setState({jobID: id, details: this.state.result[index]});
    }

    submitSearchTerms = (term,location) => {
        let URL = 'http://172.20.10.3:8080/search';
        let payload = {
            search : {
                term : term,
                location : location,
            }
        }
        axios.post(URL,payload)
        .then(response => {
            this.setState({result : response.data.jobs});
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        let styling = ({
            height : "100%",
            display : "flex",
        })
        return(
            <div style = {styling}>
                <Search result = {this.state.result} submit = {this.submitSearchTerms} toggle = {this.changeJOBID}/>
                <Status ID = {this.state.jobID} details = {this.state.details} noApply = {this.props.noApply}/>
            </div>
        )
    }
}

export default JobSearch;