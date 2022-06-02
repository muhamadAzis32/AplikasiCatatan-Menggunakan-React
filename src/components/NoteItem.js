import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt }) {
    return (
        <div className="note-item" id={id}>
            <NoteItemContent title={title} body={body} createdAt={createdAt} />
            <NoteItemAction />
        </div>
    );
}

export default NoteItem;