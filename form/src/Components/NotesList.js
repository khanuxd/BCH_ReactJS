import React from 'react';
import './notesList.css';

const NotesList = ({ notes }) => {
    return (
        <div className="notes">
            <h1>My Notes</h1>
            <ul>
                {notes.map((note) => {
                    return <li key={note.id}>{note.message}</li>;
                })}
            </ul>
        </div>
    );
};

export default NotesList;