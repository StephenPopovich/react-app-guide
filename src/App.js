import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manny', age: 29},
      { name: 'Stephanie', age: 25}
    ]
  });

  const [otherState, setOtherState] = useState('some other values');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
   // console.log('Was clicked!');
   // DONT DO THIS: personsState.persons[0].name = "Steven";
  setPersonsState({
     persons:[
       { name: 'Sam', age: 28 },
       { name: 'Manny', age: 29},
       { name: 'Stephanie', age: 35}
     ],
      otherState: personsState.otherState
   });
  };

  useState('some other value');

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React App Guide</h1>
        </header>
        <p className="App-intro">
          This is one of my first React applications
        </p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age} />
        <Person
           name={personsState.persons[1].name}
           age={personsState.persons[1].age}
           click={switchNameHandler}>My Hobbies: Racing</Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age} />

      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));

}

export default app;
