import React from 'react'
import Card from './Card'

const data = [
    {name: "Jose"},
    {name: "Britt"},
    {name: "Matt"},
    {name: "Dustin"},
    {name: "Justin"},
    {name: "Kayla"},
    {name: "Deanna"},
    {name: "Cameron"},
    {name: "Tim"},
    {name: "Ron"},
    {name: "Jamie"},
    {name: "Brande"},
    {name: "Jordan"},
    {name: "Xavier"},
 ];

export default function CardContainer() {
    return (
        <div>
            {data.map((student) => <Card student={data}/>)}
            
        </div>
    )
}
