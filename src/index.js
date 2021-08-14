import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const staticPath = '/sc/';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={staticPath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
