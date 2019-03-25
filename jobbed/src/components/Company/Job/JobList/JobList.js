import React, {Component} from 'react';
import classes from './JobList.css';
import DashNav from '../../../Dashboard/LeftSection/DashNav/DashNav';
import axios from 'axios';
import Aux from '../../../../hoc/Aux';
import Job from '../Job';
class List extends Component {
    state = {
        list : null,
        selectedTab : 1,
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    };

    componentDidMount() {
        this.getCompanyJobList();
    }

    getCompanyJobList = () => {
        let URL = 'http://172.20.10.3:8080/company/'+this.props.companyID+'/job';
        axios.get(URL)
        .then(response => {
            this.setState({list : response.data.jobs, selectedTab : response.data.jobs[0].ID})
        })
        .catch(error => {
            console.log(error);
        })
    }

    getJobIndex = (jobID) => {
        if(jobID === null) {
            return 0;
        } else {
            return this.state.list.findIndex(n => {
                return n.ID === jobID;
            });
        }
    }

    changeSelection = (id) => {
        this.setState({selectedTab: id});
        this.child.loadDataOnState(id);
    }

    render () {
        let view = null;
        if(this.state.list === null) {
            view = (
                <div className = {classes.nilJob}>
                    <br/><br/><br/><br/><br/>
                    No Jobs Posted Yet
                </div>
            )
        } else {
            view = (
                <Aux>
                    <div className = {classes.listBodyLeft}>
                        <div className = {classes.title} style = {{border : "none"}}>
                            Job List
                        </div>
                        <div className = {classes.listBody}>
                            <DashNav tabs = {this.state.list} selection = {this.state.selectedTab} toggle = {this.changeSelection}/>
                        </div>
                    </div>
                    <div className = {classes.listBodyRight}>
                        <div className = {classes.title}>
                            Details
                        </div>
                        <div className = {classes.listBody}>
                            <Job ref = {instance => {this.child = instance}} jobs = {this.state.list} ID = {this.state.selectedTab} companyID = {this.props.companyID} reload = {this.props.reload}/>
                        </div>
                    </div>
                </Aux>
            );
        }
        return(   
            <div className = {classes.list}>
                {view}
            </div>
        )
    }
}

export default List;