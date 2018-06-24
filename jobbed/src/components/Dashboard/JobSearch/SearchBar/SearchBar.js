import React, {Component} from 'react';
import classes from './SearchBar.css';
import Icons from '../../../Icons/icons';

class SearchBar extends Component {
    state = {
        value: '',
    };
    
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return(
            <div className = {classes.body}>
                <form className = {classes.formStyling} onSubmit = {this.handleSubmit}>
                    <input 
                        className = {classes.profession} 
                        type = "text" value = {this.state.value} 
                        list = "data" onChange = {this.handleChange} 
                        placeholder = "Job Title, Skills, or Company" 
                        autoFocus
                    />
                    <input className = {classes.location} type = "text" placeholder = "City, State or Zip"/>
                    <button className = {classes.submission} type = "submit"><Icons type = "search" size = "20px"/></button>
                </form>
            </div>
        )
    }
}

export default SearchBar;