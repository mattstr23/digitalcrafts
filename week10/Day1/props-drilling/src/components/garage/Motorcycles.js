import React from 'react'
import "../../App.css"
import { useSelector } from 'react-redux';

export default function Motorcycles() {
    const kawasaki = useSelector(state => state.kawasaki)

    return (
    <div className="box">
        <h1>Motorcycles</h1>
        {kawasaki}
    

    
    </div>
    );
}