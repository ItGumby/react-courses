import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { InitialDataContext } from './initialDataContext';

/* change of responsibility, extracted BrowserRouter from App.js to index.js
  also, change ReactDOM.render(...) to ReactDOM.hydrate

  Client react-dom/client has createRoot(domNode, opts?), hydrateRoot(domNode, reactNode, opts?)
  https://react.dev/reference/react-dom/client/createRoot

  v18 depreacted react-dom.render(), .hydrate(), ...
*/

const APP_JSX = (
  <React.StrictMode>
    <InitialDataContext.Provider value={(window && window.preloadedData) || {_data: {} }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InitialDataContext.Provider>
  </React.StrictMode>);
const root = createRoot(document.querySelector('#root'));
root.render(APP_JSX);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
