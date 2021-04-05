import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

//lesson 28

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={ ()=> <Profile posts1={props.posts1} /> }/>
                    <Route path="/dialogs" render={ ()=> <Dialogs dialogs1={props.dialogs1} messages1={props.messages1}/> }/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
