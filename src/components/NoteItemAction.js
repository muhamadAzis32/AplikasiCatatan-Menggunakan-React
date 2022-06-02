import React from "react";

function NoteItemAction({ onDeleteNote, onArsipNote, id, archived }) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDeleteNote(id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() => onArsipNote(id)}>{archived ? "Pindahkah" : "Arsipkan"}</button>
        </div>
    )
}

export default NoteItemAction;