import { useState } from "react";
import { getInitialData } from "./utils/index";

import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

function App() {

    const [notes, setNotes] = useState(getInitialData());

    const notesActive = (notes).filter((note) => !note.archived);
    const notesArsip = (notes).filter((note) => note.archived);

    return (
        <div className="note-app">
            <NoteHeader />
            <NoteBody notesActive={notesActive} notesArsip={notesArsip} setNotes={setNotes} />
        </div>
    );

}

export default App;
