import React from 'react';
import Search from './Search/Search';
import Status from './StatusBoard/Status';

const main = () => {
    let styling = ({
        // backgroundColor : "rgba(0,0,0,0.1)",
        height : "100%",
        display : "flex",
    })
    return(
        <div style = {styling}>
            <Search/>
            <Status/>
        </div>
    )
}

export default main;