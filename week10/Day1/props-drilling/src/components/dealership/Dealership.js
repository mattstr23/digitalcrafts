import React from 'react'
import "../../App.css"
import {useSelector, useDispatch} from "react-redux"

export default function DealerShip(props) {
    const bugatti = useSelector(state => state.bugatti)
    const kawasaki = useSelector(state => state.kawasaki)
    const dispatch = useDispatch();



    return (
    <div className="box">
        <h1>Dealership</h1>
        <h2>Cars in Stock</h2>
        <p>{props.mustang}</p>
        <p>{props.fordGT}</p>
        <p>{bugatti}</p>
        <p>{kawasaki}</p>
        <button onClick={() => dispatch({type: "CHANGE_KAWASAKI" })}>
            Change Bike
        </button>
    
    </div>
    );
}