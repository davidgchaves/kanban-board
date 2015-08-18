import uuid from 'node-uuid';
import React from 'react';
import Note from './Note.jsx';

export default class App extends React.Component {
  render() {
    const notes = [
      {
        id: uuid.v4(),
        task: 'Go pick amazon package'
      },
      {
        id: uuid.v4(),
        task: 'Find a nice place to eat'
      },
      {
        id: uuid.v4(),
        task: 'Try the new Memopulse MVP'
      }
    ];
    return (
      <div>
        <ul>{notes.map(this.renderNote)}</ul>
      </div>
    );
  }

  renderNote(note) {
    return (
      <li key={`note${note.id}`}>
        <Note task={note.task} />
      </li>
    );
  }
}
