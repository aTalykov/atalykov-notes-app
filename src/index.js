import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBKdCTrz1PTIrNNF32kJwVA4wV1cQYO9_0",
  authDomain: "tal-s-notes.firebaseapp.com",
  databaseURL: "https://tal-s-notes-default-rtdb.firebaseio.com",
  projectId: "tal-s-notes",
  storageBucket: "tal-s-notes.appspot.com",
  messagingSenderId: "364673748069",
  appId: "1:364673748069:web:5aeac9003202acfeffca8c"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
