import {useState} from "react";
import ToDoItems from "./ToDoItems";

function ToDoList() {
    const [toDoItem, setToDoItem] = useState("");
    const [toDoList, setToDoList] = useState([])

    return (
        <div>
            <h1>ToDoList</h1>
            <input type="text" onChange={(e) => setToDoItem(e.target.value)} type="text" placeholder="Type To Do" />
            <button onClick={() => setToDoList([...toDoList, toDoItem])}>Add ToDo</button>
            <ToDoItems list={toDoList} />
        </div>
    );
}
export default ToDoList;