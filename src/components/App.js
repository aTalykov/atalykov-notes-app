import React, { useState } from "react";
import '../css/App.css';
import AuthForm from "./AuthForm.js";
import RegForm from "./RegForm.js";
import DescNote from "./DescNote"
import firebase from "firebase";

export default function App() {
  const [login, setLogin] = useState({
    email: '',
    username: '',
    password: '',
    loggedIn: false
  });
  const [reg, setReg] = useState(false);

  function handleRegClick() {
    setReg(!reg);
  }

  // Аутентификация пользователя
  function signinFormSubmit(event) {
    event.preventDefault();
    const { email, password } = login;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response =>
        setLogin({ ...login, loggedIn: true }),
      )
      .catch(error => console.log(error));
  }

  function createNewAccount(event) {
    event.preventDefault();
    const { email, username, password } = login;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(event => {
        const userId = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + userId + '/info').set({
          'email': email,
          'username': username,
        })
        setLogin({ ...login, loggedIn: true })
      }
      )
      .catch(error => console.log(error));
  }

  // Заполнение формы входа
  function handleFieldChange(event) {
    setLogin({ ...login, [event.target.id]: event.target.value })

  }

  if (login.loggedIn) {
    return <DescNote />
  }

  if (reg !== true) {
    return <AuthForm onFormSubmit={signinFormSubmit} onFieldChange={handleFieldChange} onRegClick={handleRegClick} />
  };
  return <RegForm onAcountFormSubmit={createNewAccount} onFieldChange={handleFieldChange} onRegClick={handleRegClick} />
}