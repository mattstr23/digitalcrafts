import SignUpForm from "./components/SignUpForm";
import './AppStyle.css'
import { useEffect } from "react";

function App() {

  useEffect(() => {
    getWeather();
  }, []);
  const getWeather = async () => {
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=houston&appid=ff1cadec65d9f10c3aafc2a01b14612c");
    const jsonWeather = await data.json();
    console.log(jsonWeather);
  };

  return (
    <div className="App">
      <SignUpForm />
    
    </div>
  );
}

export default App;
