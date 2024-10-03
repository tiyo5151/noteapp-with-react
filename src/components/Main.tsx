import React from 'react';
import '../styles/Main.css';
import { MainProps } from '../types/Main';
import ReactMarkdown from 'react-markdown';

const Main: React.FC<MainProps> = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key: string, value: string | null) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };
  if (!activeNote) {
    return <div className="no-active-note">ノートが選択されていません</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          placeholder="New Note"
          value={activeNote.title}
          onChange={(e) => onEditNote('title', e.target.value)}
        />
        <textarea
          id="content"
          placeholder="ノートの内容の記入"
          value={activeNote.content}
          onChange={(e) => onEditNote('content', e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
