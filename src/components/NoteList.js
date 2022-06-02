import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, label }) {
    return (
        <>
            <h2>{label}</h2>
            <div className="notes-list">
                {
                    notes.length === 0 ? (
                        <p>Tidak Ada Catatan</p>
                    ) : (
                        notes.map((note) => (
                            <NoteItem key={note.id} {...note} />
                        ))
                    )
                }
            </div>
        </>
    );
}

export default NoteList;