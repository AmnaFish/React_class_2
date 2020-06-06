import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //<React.StrictMode>
    <div><App name="Amna Saeed" age="21" /></div>,
 //  <div>Hellow World</div>, //here we can have div inside a div but not more than 1 div element
  // </React.StrictMode>,
  document.getElementById('root')
);


//the above code is truley executed by React.createElement()
/*ReactDOM.render(
  //React.createElement('div',null,"this is text"),
  //If you want to add an element to divs kid (which is the text in 3rd)
  React.createElement('div',null,React.createElement('span',null,"this is a span")),
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
