import React from "react";

export default function ToDoItems(props) {
    const {list} = props;

    return (
        <div>
            <h1>Your To Do List</h1>
            <ul>
                {list.map((toDo) => (
                    <li>{toDo}</li>
                ))}
            </ul>
        </div>
    );
}