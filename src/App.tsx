import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { useEffect, useMemo, useState } from 'react';
import { newNote } from './types/App';
import { v4 as uuid } from 'uuid';

function App() {
  const [notes, setNotes] = useState<newNote[]>(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [activeNote, setActiveNote] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setActiveNote(notes[0]?.id || null);
  }, []);

  const onAddNote = () => {
    // console.log('Add note');
    const newNote: newNote = {
      id: uuid(),
      title: 'New Note',
      content: '',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };
  const onDeleteNote = (id: string) => {
    console.log('Delete note', id);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getActiveNote = useMemo(() => {
    return notes.find((note) => note.id === activeNote);
  }, [notes, activeNote]);

  const onUpdateNote = (updateNote: newNote): newNote | null => {
    const updateNotesArray = notes.map((note) => {
      if (note.id === updateNote.id) {
        return updateNote;
      } else return note;
    });

    setNotes(updateNotesArray);
    return updateNote;
  };
  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      {getActiveNote ? (
        <Main activeNote={getActiveNote} onUpdateNote={onUpdateNote} />
      ) : (
        <div className="select-note">Please select a note</div>
      )}
    </div>
  );
}

export default App;
