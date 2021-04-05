import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "Its`s my first post", likes: 15},
    {id: 2, message: "Hi, how are you?", likes: 20},
    {id: 3, message: "Blabla", likes: 20},
    {id: 4, message: "Dada", likes: 20}
]

let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"}
];

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hi is your day?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"}
];

ReactDOM.render(<App posts1={posts} dialogs1={dialogs} messages1={messages}/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
