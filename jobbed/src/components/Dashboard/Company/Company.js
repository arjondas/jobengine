import React, {Component} from 'react';

class Company extends Component {
    render() {
        let styling = ({
            // backgroundColor : "rgba(0,0,0,0.1)",
            height : "100%",
            // display : "flex",
        });
        return(
            <div style = {styling}>
                Hello
            </div>
        )
    }
}

export default Company;