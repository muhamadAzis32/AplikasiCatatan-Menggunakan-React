import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt, archived, action }) {

    const onDeleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));

    return (
        <div className="note-item">
            <NoteItemContent
                title={title}
                body={body}
                createdAt={createdAt}
                archived={archived}
                action={action}
            />

            <NoteItemAction onDeleteNote={onDeleteNote} id={id} />
        </div>
    );
}

export default NoteItem;