import React from 'react';
import Result from './Result';

const results = (props)=> {
    return props.list.map((company,index) => {
        return(
            <Result 
                key = {company.ID}
                ID = {company.ID}
                name = {company.companyName}
                title = {company.title}
                field = {company.field}
                deadline = {company.deadline}
                salary = {company.salary}
                experience = {company.experience}
                description = {company.description}
                type = {company.type}
                location = {company.location}
                toggle = {props.toggle}
            />
        )
    })
}

export default results;