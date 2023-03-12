import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import'bootstrap/dist/js/bootstrap.bundle.min.js'
import'bootstrap/dist/css/bootstrap.min.css'
import"@fortawesome/fontawesome-free/css/all.min.css"
import './index.css';
import"jquery/dist/jquery.min.js"
import  'spinkit/spinkit.min.css'
import GamesContext from './GamesContext/GamesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GamesContext>
      <App />
    </GamesContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
