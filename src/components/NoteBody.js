import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notes }) {
    return (
        <div className="note-app__body">
            <NoteInput />
            <NoteList notes={notes} />
        </div>
    );
}

export default NoteBody;