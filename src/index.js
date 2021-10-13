import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL =  'https://reqres.in/api'
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

reportWebVitals();
