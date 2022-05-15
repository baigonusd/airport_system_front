import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//auth stuff
import {Provider} from 'react-redux';
import store from './auth/store';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store = {store} >
    <App />


    </Provider>
    
  </React.StrictMode>
);


