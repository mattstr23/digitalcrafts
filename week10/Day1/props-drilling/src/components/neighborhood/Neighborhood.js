import React from 'react'
import Home from '../house/Home';
import "../../App.css"

export default function NeighborHood(props) {

    return (
    <div className="box">
        <h1>NeighborHood</h1>
        <Home mustang={props.mustang}/>

    
    </div>
    );
}