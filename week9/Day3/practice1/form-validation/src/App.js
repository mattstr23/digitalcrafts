import {useState} from "react";
// This is a hook^^
import Form from "./components/Forms";
import ToDoList from "./components/ToDoList"

function App() {

const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState("");

  return (
    <div className="App">
      {/* <h1>Hooks</h1>

      <p>User is {userName}</p>
      <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="User Name"/>
      <div>
        <p> Counter is: {counter} </p>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter - 1)}>Subract</button>
      </div>  */} 
      <ToDoList />
    </div>
  );
}

export default App;
