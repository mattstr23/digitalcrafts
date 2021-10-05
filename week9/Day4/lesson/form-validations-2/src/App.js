import { MainDiv } from "./AppStyle";
import Form from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Account from "./components/Account";
import Garage from "./components/Garage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useState} from 'react'

function App() {
  const[viewSideBar, setViewSideBar] = useState(true);
  return (
    <Router>
      <Switch/>
        <Header viewSideBar={viewSideBar}
        setViewSideBar={setViewSideBar} />
        <MainDiv>
          <Sidebar viewSideBar={viewSideBar}/>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Form />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/garage">
          <Garage />
        </Route>
      </MainDiv>
      <Switch/>
    </Router>
  
  );
}

export default App;
