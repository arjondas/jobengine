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
                        CareerStation: Find the right job...
                    </div>
                    <SearchBar/>
                    <SearchResult/>
                </div>
            </div>
        )
    }
}

export default Search;