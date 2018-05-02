import React, {PureComponent} from 'react';
import Bar from './searchbar';
import classes from './search.css';
// import Icon from '../icons';

class Search extends PureComponent {
    state = {
        searchTriggered : false
    }
    
    searchHandler = () => {
        const temp = this.state.searchTriggered;
        if(!this.state.searchTriggered){
            this.setState({
                searchTriggered : !temp
            })
        }
    }
    
    render() {
        let styling = null;
        if(this.state.searchTriggered) {
            styling = ({color: "rgba(0,0,0,0)"});
        }
        return(
            <div className = {classes.search}>
                <p style = {styling}>Search Jobs</p>
                <Bar change = {this.searchHandler} />
            </div>

        )
    }
}

export default Search;