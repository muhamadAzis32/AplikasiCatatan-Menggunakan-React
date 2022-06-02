import { useState, useEffect } from "react";
import { getInitialData } from "./utils/index";

import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

function App() {
    const [query, setQuery] = useState("");
    const [cariNotes, setCariNotes] = useState([]);
    const [notes, setNotes] = useState(getInitialData());

    const notesActive = (cariNotes || notes).filter((note) => !note.archived);
    const notesArsip = (cariNotes || notes).filter((note) => note.archived);

    useEffect(() => {
        setCariNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
    }, [query, notes]);

    return (
        <div className="note-app" >
            <NoteHeader search={query} setQuery={setQuery} />
            <NoteBody notesActive={notesActive} notesArsip={notesArsip} setNotes={setNotes} />
        </div>
    );

}

export default App;
