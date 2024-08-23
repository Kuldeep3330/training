import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ex5 from './Ex5';
import Ex4 from './Ex4';
import Controlled from './Controlled';
import Uncontrolled from './Uncontrolled';
import Assignment from './Assignment';
import Background from './Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Ex5/> */}
    {/* <Ex4/> */}
    {/* <Controlled/> */}
    {/* <Uncontrolled/> */}
    {/* <Assignment/> */}
    <Background/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
