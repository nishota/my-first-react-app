import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ref: https://ja.reactjs.org/docs/rendering-elements.html#updating-the-rendered-element
setInterval(
   ()=> ReactDOM.render(<App />, document.getElementById('root'))
   , 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
