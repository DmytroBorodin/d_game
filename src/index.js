import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './store/state';
import {setAnswer} from "./store/state";
import {reloadGame} from "./store/state";
import {setUsers} from './store/state';

export let rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} reloadGame={reloadGame} setUsers={setUsers} setAnswer={setAnswer}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerender();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
