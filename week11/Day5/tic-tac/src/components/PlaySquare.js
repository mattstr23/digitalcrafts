import React from 'react'
import '../App.css'

export default function PlaySquare(props) {
    return (
        <div>
            <button className="gameSquare" onClick={()=>
            props.userClick()}>{props.val}</button>
            
        </div>
    )
}
