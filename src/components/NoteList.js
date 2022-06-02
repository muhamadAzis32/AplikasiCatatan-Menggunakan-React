import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    return (
        <>
            <h2>Catatan Aktif</h2>
            <div className="notes-list">
                {
                    notes.map((note) => (
                        <NoteItem key={note.id} {...note} />
                    ))
                }
            </div>
        </>
    );
}

export default NoteList;