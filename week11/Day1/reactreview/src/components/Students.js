import React from 'react'

export default function Students(props) {
    const {student} = props
    return (
        <div>
            <h1>{student?.name}</h1>
        </div>
    )
}
