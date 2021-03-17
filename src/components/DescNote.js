import React, { useState, useEffect } from "react";
import firebase from "firebase";
import AddNoteForm from "./AddNoteForm"
import NoteList from "./NoteList"
import "../css/DescNote.css"

export default function DescNote() {
  const [list, setList] = useState({})
  const [form, setForm] = useState({
    noteTitle: '',
    noteContent: '',
  })
  const [addNoteForm, setAddNoteForm] = useState(false);
  const userId = firebase.auth().currentUser.uid;
  const db = firebase.database();

  useEffect(() => {
    db.ref().child("users").child(userId).child("notes").on('value', (snapshot) => {
      setList(snapshot.val())
    })
    return () => {
      console.log("уборка")
    }
  }, [])

  function handleNoteFormClick() {
    setAddNoteForm(!addNoteForm);
  }

  // Отправляем данные в БД
  function addNote(event) {
    event.preventDefault();
    const { noteTitle, noteContent } = form;
    const date = new Date().getTime();
    db.ref('users/' + userId + '/notes/' + date).set({
      'title': noteTitle,
      'content': noteContent,
      'date': date,
    });
    setAddNoteForm(!addNoteForm)
  }

  function deleteNote(date) {
    db.ref('users/' + userId + '/notes/' + date).remove()
  }


  // Форма отправки данных
  function handleFormChange(event) {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  return (
    <div className="notes_wrapper">
      <header className="header_wrapper">
        <p className="header_title">Список заметок</p>
      </header>
      <main className="note_body_wrapper">
        <NoteList onNoteDelete={deleteNote} list={list} />
      </main>
      <footer className="footer_wrapper">
        <input
          type="button"
          onClick={handleNoteFormClick}
          value="Создать заметку" />
      </footer>
      { addNoteForm === true && 
      <div className="add_note_wrapper">
        <AddNoteForm onFormChange={handleFormChange} onNewNote={addNote} onNoteFormClick={handleNoteFormClick} />
      </div>
      }
    </div>
  )
}