import { newNote } from './App';

interface MainProps {
  activeNote: newNote | null;
  onUpdateNote: (updateNote: newNote) => newNote | null;
}

export type { MainProps };
