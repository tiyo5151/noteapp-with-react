import { newNote } from './App';

interface MainProps {
  activeNote: newNote;
  onUpdateNote: (updateNote: newNote) => newNote | null;
}

export type { MainProps };
