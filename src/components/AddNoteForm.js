import React from "react";
import "../css/AddNoteForm.css"

export default function AddNoteForm(props) {

  return (
    <div>
      <form className="new_note">
        <div className="new_note_head">
          <input
            type="text"
            id="noteTitle"
            className="new_note_title"
            placeholder="Заголовок"
            autoComplete="off"
            onChange={props.onFormChange}
          />
          <input
            type="button"
            onClick={props.onNoteFormClick}
            className="btn-delete"
            value="✖" />
        </div>
        <div className="new_note_body">
          <textarea
            type="text"
            id="noteContent"
            placeholder="Текст..."
            autoComplete="off"
            onChange={props.onFormChange}
          />
          <input
            type="submit"
            placeholder="Enter value"
            className="new_note_submit"
            autoComplete="off"
            onClick={props.onNewNote}
            value="➤"
          />
        </div>
      </form>
    </div>
  )
}