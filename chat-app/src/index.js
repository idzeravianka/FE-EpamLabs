import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './_reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { asyncAddMessage } from './_actions/messages';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
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

const store = createStore(reducer, composeWithDevTools(applyMiddleware(asyncAddMessage)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();