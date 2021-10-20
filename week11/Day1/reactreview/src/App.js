import './App.css';
import { useState } from 'react'
import StudentContainer from './components/StudentContainer';
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const [inputValue, setInputValue] = useState(0)
  
  return (
    <div className="App">
      <h1>App.js</h1>
      <h3>Data starts here</h3>
      {counter}
      <input onChange={(e)=>setInputValue(parseInt(e.target.value))}type="number" />
      <button onClick={()=>dispatch({type:"THE_COUNTER", payload:inputValue})}>Increase Counter</button>
      <StudentContainer/>
    </div>
  );
}

export default App;
