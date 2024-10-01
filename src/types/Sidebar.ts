import { newNote } from './App';

type SidebarProps = {
  onAddNote: () => void;
  onDeleteNote: (id: string) => void;
  notes: newNote[];
  activeNote: string | null;
  setActiveNote: (activeNote: string | null) => void;
};

export type { SidebarProps };
