import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notesActive, notesArsip }) {
    return (
        <div className="note-app__body">
            <NoteInput />
            <NoteList label="Catatan Aktif" notes={notesActive} />
            <NoteList label="Arsip" notes={notesArsip} />
        </div>
    );
}

export default NoteBody;