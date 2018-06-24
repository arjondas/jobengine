import React from 'react';
import Result from './Result';

const results = (props)=> {
    return props.list.map((company,index) => {
        return(
            <Result key = {company.id} 
                name = {company.compName} 
                field = {company.field}
                deadline = {company.deadLine}
                salary = {company.salary}
                year = {company.expYear}
                description = {company.description}
                type = {company.jobType}
                address = {company.address}
            />
        )
    })
}

export default results;