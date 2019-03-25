import React from 'react';
import NavBlock from './NavBlock';
const blocks = (props) => {
    return props.tabs.map((tab,index) => {
        let active = props.selection === tab.ID;
        return <NavBlock key = {tab.ID} title = {tab.title} itype = {tab.icon} selection = {tab.selection} toggleTab = {(index) => props.toggle(tab.ID) } isActive = {active}/>
    });
}

export default blocks;