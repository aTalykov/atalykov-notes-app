import React from "react";
import "../css/NoteList.css"

export default function ItemList(props) {

  function timeConverter(date) {
    let time = new Date(date);
    let year = time.getFullYear()
    let month = ((time.getMonth() + 1) < 10) ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
    let day = time.getDate();
    let hours = time.getHours();
    let minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
    let formattedTime = day + '.' + month + '.' + year + '  ' + hours + ':' + minutes;
    return formattedTime
  }

  // Получаем заметки из БД
  if (props.list) 
  {return (
      <ul className="note_list_wrapper">
        {Object.values(props.list).map(note => (
          <li className="note_item" key={note.title}>
            <div className="note_head">
              <h2>{note.title}</h2>
              <input
                type="button"
                onClick={() => props.onNoteDelete(note.date)}
                className="btn-delete"
                value="✖" />
            </div>
            <div className="note_body">
              <p className="note_content">{note.content}</p>
              <p className="note_date">{timeConverter(note.date)}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div className="note_list_welcome">
      <p>Добро пожаловать в приложение по созданию заметок с использованием <span>Firebase Database</span>. Чтобы создать новую заметку, нажмите на кнопку <span>"Создать заметку"</span></p>
    </div>
  )
}