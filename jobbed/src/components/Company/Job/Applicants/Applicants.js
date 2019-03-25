import React from 'react';
import Applicant from './Applicant';
import Aux from '../../../../hoc/Aux';
const applicant = (props) => {
    return props.list.map((applicant, index) => {
        return (
            <Aux>
                <Applicant 
                key = {applicant.user.ID}
                ID = {applicant.user.ID}
                jobID = {props.jobID}
                experience = {applicant.user.experience}
                cgpa = {applicant.user.cgpa}
                name = {applicant.user.name}
                username = {applicant.user.username}
                email = {applicant.user.email}
                DateOfBirth = {applicant.user.DateOfBirth}
                currentJob = {applicant.user.currentJob}
                designation = {applicant.user.designation}
                street = {applicant.user.street}
                state = {applicant.user.state}
                country = {applicant.user.country}
                />
                <br/><br/>
            </Aux>
        )
    })
}

export default applicant;