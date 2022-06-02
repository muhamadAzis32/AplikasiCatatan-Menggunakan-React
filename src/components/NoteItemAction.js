import React from "react";

function NoteItemAction({ onDeleteNote, id }) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDeleteNote(id)}>Delete</button>
            <button className="note-item__archive-button">Arsipkan</button>
        </div>
    )
}

export default NoteItemAction;