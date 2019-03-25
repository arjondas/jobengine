import React, {Component} from 'react';
import classes from './AdminRight.css';
import AdminUnit from './AdminPanelUnit/AdminPanelUnit';

class AdminRight extends Component {
    render() {
        let list = null;
        if(this.props.list !== null) {
            list = (
                <div className = {classes.adminList}>
                    {this.props.list.map((adminUnit,index) => {
                        const draw = (index !== (this.props.list.length - 1));
                        return(
                            <AdminUnit unit = {adminUnit} shouldDrawLine = {draw} companyID = {this.props.companyID} fetch = {this.props.fetch} reload = {this.props.reload}/>
                        )
                    })}
                </div>
            )   
        }else {
            list = (
                <div style = {{textAlign: "center", color: "lightgrey"}}><br/>
                    List is Empty<br/>
                </div>
            )
        }
        return(
            <div className = {classes.admin}>
                <div className = {classes.adminRight}>
                    List of Administrators<br/><br/>
                    {list}
                </div>
            </div>
        )
    }
}

export default AdminRight;