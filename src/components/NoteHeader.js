import React from "react";

function NoteHeader() {
    return (
        <div className="note-app__header">
            <h1>Az Notes</h1>
            <div className="note-search">
                <input type="text" placeholder="Cari catatan ..." />
            </div>
        </div>
    );
}

export default NoteHeader;