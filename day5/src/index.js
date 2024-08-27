import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ex9 from './Ex9';
import Ex8 from './Ex8';
import Ex11 from './Ex11';
import Ex12 from './Ex12';
import Gfgok from './Gfgok';
import Ex1 from './Axios/Ex1';
import Myform from './Practise/Myform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Ex1/> */}
    <Myform/>
    {/* <Ex8/> */}
    {/* <Ex11/> */}
    {/* <Ex12/> */}
    {/* <Gfgok/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
