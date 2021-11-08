import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './Search';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <h1 className='title'>LibRusEc db</h1>
    <div className="container">  
    <Search  />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
