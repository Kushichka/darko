import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";

//lesson 14

const App = () => {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav />
        <Profile />
    </div>
  );
}

export default App;
