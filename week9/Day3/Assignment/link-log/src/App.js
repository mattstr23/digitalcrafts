import {useState} from "react";
import UserDetails from "./components/DB";
import SignUp from "./components/Signup";

function App() {
  const [inputs, setInputs] = useState({});
  const [details, setDetails] = useState([]);

  return (
    <div className="App">
      <SignUp userInputs={inputs} setUserInputs={setInputs} userDetails={details} setUserDetails={setDetails} />
      <UserDetails userDetails={details} />

    </div>
  );
}

export default App;
