import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Card from './Card';

function App() {
  const user = {
    firstName: "Wendy",
    lastName: "Spruce",
    userName: "wspruce",
  };
  const birthday = "10/11/1991"
  return (
    <div className="App">
      <Header user={user} birthday={birthday}/>
      <Card/>
    </div>
  );
}

export default App;
