import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React App Guide</h1>
        </header>
        <p className="App-intro">
          This is one of my first React applications
        </p>
        <Person />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
