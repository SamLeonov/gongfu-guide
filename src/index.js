import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './App';
import Routes from './Routes';
import "./index.css";


ReactDOM.render(
  <HashRouter>
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

