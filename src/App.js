import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/nav/news/News";
import Music from "./components/nav/music/Music";
import Settings from "./components/nav/settings/Settings";

//lesson 33

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    newMessageText={props.state.newMessageText}
                    addMessage={props.addMessage}
                    updateMessageText={props.updateMessageText}/>}/>
                <Route path="/profile" render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
