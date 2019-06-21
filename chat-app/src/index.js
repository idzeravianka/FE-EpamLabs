import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDvOHeFo1B-Qoh7rSQI8_4nwp0hTyW_Buw",
    authDomain: "chat-app-bfda6.firebaseapp.com",
    databaseURL: "https://chat-app-bfda6.firebaseio.com",
    projectId: "chat-app-bfda6",
    storageBucket: "chat-app-bfda6.appspot.com",
    messagingSenderId: "1029665514924",
    appId: "1:1029665514924:web:24c87645c7f83ab9"
};

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();