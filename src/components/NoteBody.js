import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notesActive, notesArsip, setNotes }) {
    return (
        <div className="note-app__body">
            <NoteInput setNotes={setNotes} />
            <NoteList label="Catatan Aktif" setNotes={setNotes} notes={notesActive} />
            <NoteList label="Arsip" setNotes={setNotes} notes={notesArsip} />
        </div>
    );
}

export default NoteBody;