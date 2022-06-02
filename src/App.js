import React from "react";
import { getInitialData } from "./utils/index";

import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

function App() {

    const notes = getInitialData();

    return (
        <div className="note-app">
            <NoteHeader />
            <NoteBody notes={notes} />
        </div>
    );

}

export default App;
