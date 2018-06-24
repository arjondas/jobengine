import React, {Component} from 'react';
import classes from './NavBlock.css';
import Icons from '../../../../Icons/icons';

class Block extends Component {
    render() {
        let styling = null;

        if(this.props.isActive) {
            styling = ({
                backgroundColor: "white",
                color: "royalblue",
                boxShadow: "0px 5px 5px -5px rgba(65, 105, 225, 0.15), 0px -5px 5px -5px rgba(65, 105, 225, 0.15)",
                borderLeft: "4px solid royalblue",
            });
        }

        return(
            <tr>
                <td className = {classes.row} style = {styling} onClick = {this.props.toggleTab}>
                    &nbsp;&nbsp;&nbsp;<Icons type = {this.props.itype}/>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.title}
                </td>
            </tr>
        )
    }
}

export default Block;