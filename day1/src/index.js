import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Ex2 from './Ex2';
import Ex from './Ex';
import Ex1 from './Ex1';
import Header from './Components/Header';
import Chai1 from './Chai1';
import Chai2 from './Chai2'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Ex/> */}
    {/* <App/> */}
   {/* <Chai1/> */}
   <Chai2/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
