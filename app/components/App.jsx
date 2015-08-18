import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
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
      ]
    };
  }
  render() {
    const notes = this.state.notes;
    return (
      <div>
        <Notes items={notes} />
      </div>
    );
  }
}
