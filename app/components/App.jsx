import 'array.prototype.findIndex';
import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        { id: uuid.v4(), task: 'Go pick amazon package' },
        { id: uuid.v4(), task: 'Find a nice place to eat' },
        { id: uuid.v4(), task: 'Try the new Memopulse MVP' }
      ]
    };

    this.addNote  = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }
  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes
          items={notes}
          onEdit={this.editNote} />
      </div>
    );
  }
  addNote() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }
  editNote(id, task) {
    let notes = this.state.notes;
    const noteIndex = this.findNote(id);

    if (noteIndex < 0) { return; }

    notes[noteIndex].task = task;

    this.setState({notes});
  }
  findNote(id) {
    let notes = this.state.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex < 0) { console.warn('Failed to find note', notes, id); }

    return noteIndex;
  }
}
