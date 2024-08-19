import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Ex3/> */}
    {/* <Ex4/> */}
    <Ex5/>
  </React.StrictMode>
);

reportWebVitals();
