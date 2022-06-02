import { useState } from "react";
import Input from "./Input";

function NoteInput({ setNotes }) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        const timestamp = new Date().toISOString();

        setNotes((notes) => [
            ...notes,
            { id: timestamp, title: title, body: body, archived: false, createdAt: timestamp },
        ]);
    };


    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            <form onSubmit={onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Sisa karakter: {50 - title.length}</p>
                <Input
                    value={title}
                    onChange={setTitle}
                    id='title'
                    name='title'
                    type="text"
                    placeholder="Ini adalah judul ..."
                    required
                />
                <Input
                    value={body}
                    onChange={setBody}
                    id="body"
                    name="body"
                    type='textarea'
                    placeholder="Tuliskan catatanmu di sini ..."
                    required
                />
                <button type="submit">Buat</button>
            </form>
        </div>
    );
}

export default NoteInput;