import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

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
        <Notes items={notes} />
      </div>
    );
  }
}
