import React from 'react';
import NavBlock from './NavBlock';
const blocks = (props) => {
    return props.tabs.map((tab,index) => {
        let active = props.selection === tab.id;
        return <NavBlock key = {tab.id} title = {tab.title} itype = {tab.icon} selection = {tab.selection} toggleTab = {(index) => props.toggle(tab.id) } isActive = {active}/>
    });
}

export default blocks;