import React, {Component} from 'react';
import classes from './NavBlock.css';
import Icons from '../../../../Icons/icons';
import Aux from '../../../../../hoc/Aux';
class Block extends Component {
    render() {
        let styling = ({
            boxSizing: "border-box",
        });
        
        if(this.props.isActive) {
            styling = ({
                backgroundColor: "white",
                color: "royalblue",
                boxShadow: "0px 5px 5px -5px rgba(65, 105, 225, 0.15), 0px -5px 5px -5px rgba(65, 105, 225, 0.15)",
                boxSizing: "border-box",
                borderLeft: "4px solid royalblue",
            });
        }
        let icon = null;
        let title = this.props.title.substring(0,25);
        if(this.props.title.length > 25) {
            title = title+'...';
        }
        if(this.props.itype !== null) {
            icon = (
                <Aux>&nbsp;&nbsp;&nbsp;<Icons type = {this.props.itype}/>&nbsp;&nbsp;&nbsp;&nbsp;</Aux>
            )
        }
        return(
            <tr>
                <td className = {classes.row} style = {styling} onClick = {this.props.toggleTab}>
                    {icon}{title}
                </td>
            </tr>
        )
    }
}

export default Block;