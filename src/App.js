import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

   //Left off on 59. List & Keys

class App extends Component {
 state = {
   //A 'persons' array with three elements
    persons: [
      { id: '1A', name: 'Max', age: 28},
      { id: '1B', name: 'Manny', age: 29},
      { id: '1C', name: 'Stephanie', age: 25}
    ],
      otherState: 'some other value',
      //Add another property set to false to start off not displayed.
      showPersons: false
  };


//A handler for changing the names based on an input event.
  nameChangedHandler = (event, id) => {
    //Updates the state only for the person of the input field we type into.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;

    });

    const person = {
      //spread operator
      ...this.state.persons[personIndex]
     };

     person.name = event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

//A handler that deletes selected person element
  deletePersonHandler = (personIndex) => {
    //Creates copy of your array, slice without an arugmenet simply copies the full array and returns a new array which is returned.
    // const persons = this.state.persons.splice();

    //a spread operator spreads out the elements in this array into a list of element which simply get added to this array
    const persons = [...this.state.persons];
    //Simply removes one element from the arroy
    persons.splice(personIndex, 1);
    //Set the new person's array to person
    this.setState({persons: persons});
  }

//A handler for changing the names based on an input event.
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

render () {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  };

  let persons = null;

  if (this.state.showPersons === true) {
       persons = (
         <div className="Person-list">
           {this.state.persons.map((person, index) => {
             return <Person
               click={() => this.deletePersonHandler (index)}
               name={person.name}
               age={person.age}
               key={person.id}
               changed={(event) => this.nameChangedHandler(event, person.id)}/>
           })}
          </div>
       );
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React App Guide</h1>
        </header>
        <p className="App-intro">
          This is one of my first React applications
        </p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
         {persons}


      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
