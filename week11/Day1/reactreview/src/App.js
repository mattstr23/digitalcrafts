import './App.css';
import { useState } from 'react'
import StudentContainer from './components/StudentContainer';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>App.js</h1>
      <h3>Data starts here</h3>
      <StudentContainer/>
    </div>
  );
}

export default App;
