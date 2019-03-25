import React, {Component} from 'react';
import classes from './Search.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';

class Search extends Component {
    render() {
        return(
            <div className = {classes.body}>
                <div className = {classes.search}>
                    <div className = {classes.heading}>
                        Job Station: Find the right job...
                    </div>
                    <SearchBar submit = {this.props.submit}/>
                    <SearchResult result = {this.props.result} toggle = {this.props.toggle}/>
                </div>
            </div>
        )
    }
}

export default Search;