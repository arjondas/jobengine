/// The viewport will contain the whole site, which has two portions, the canvas and the nav-bar

import React from 'react';
import classes from './Viewport.css';
import Canvas from '../Canvas/Canvas';
import Account from '../account/account';

const viewport = () => {
    return (
        <div className = {classes.Viewport}>
            <div className = {classes.Navbar}>
                <div className = {classes.DummyNav}><Account/></div>
            </div>
            <div className = {classes.Canvas}>
                <Canvas/>
            </div>
        </div>
    )
}

export default viewport;