import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { Provider } from 'react-redux';
import { createStore , combineReducers} from 'redux';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as types from './constants/ActionTypes';
import message from './reducers/message';
import app from './reducers/app';
import messaging from './reducers/messaging';
import avatar from './reducers/avatar';
import username from './reducers/username';

const chat = combineReducers({
    message,
    app,
    username,
    messaging,
    avatar,
});

const store = createStore(chat)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
