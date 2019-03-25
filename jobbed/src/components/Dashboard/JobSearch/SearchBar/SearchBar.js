import React, {Component} from 'react';
import classes from './SearchBar.css';
import Icons from '../../../Icons/icons';

class SearchBar extends Component {
    state = {
        term: '',
        location: '',
    };
    
    handleChangeTerm = this.handleChangeTerm.bind(this);
    handleChangeLocation = this.handleChangeLocation.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    handleChangeTerm(event) {
        this.setState({term: event.target.value});
    }

    handleChangeLocation(event) {
        this.setState({location: event.target.value});
    }

    handleSubmit(event) {
        this.props.submit(this.state.term, this.state.location);
        event.preventDefault();
    }
    
    render() {
        return(
            <div className = {classes.body}>
                <form className = {classes.formStyling} onSubmit = {this.handleSubmit}>
                    <input 
                        className = {classes.profession} 
                        type = "text" value = {this.state.term} 
                        list = "data" onChange = {this.handleChangeTerm} 
                        placeholder = "Job Title, Skills, or Company" 
                        autoFocus
                    />
                    <input className = {classes.location} type = "text" value = {this.state.location} placeholder = "City, State or Zip" onChange = {this.handleChangeLocation}/>
                    <button className = {classes.submission} type = "submit"><Icons type = "search" size = "20px"/></button>
                </form>
            </div>
        )
    }
}

export default SearchBar;