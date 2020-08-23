import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manny', age: 29},
      { name: 'Stephanie', age: 25}
    ],
      otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
   // console.log('Was clicked!');
   // DONT DO THIS: personsState.persons[0].name = "Steven";
  this.setState( {
     persons:[
       { name: newName, age: 28 },
       { name: 'Manny', age: 29},
       { name: 'Stephanie', age: 35}
     ]
   } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
       persons:[
         { name: 'Max', age: 28},
         { name: event.target.value, age: 29},
         { name: 'Stephanie', age: 25}
       ]
     } )
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React App Guide</h1>
        </header>
        <p className="App-intro">
          This is one of my first React applications
        </p>
        <button onClick={() => return this.switchNameHandler('Steve=o!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
           name={this.state.persons[1].name}
           age={this.state.persons[1].age}
           onClick={this.switchNameHandler.bind(this, 'Silly Sally')}
           changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));

}

export default app;
