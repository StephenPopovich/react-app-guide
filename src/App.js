import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manny', age: 29},
      { name: 'Stephanie', age: 25}
    ],
      otherState: 'some other value',
      showPersons: false
  };

//A handler for switching names
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

//A handler for changing the names based on an input event.
  nameChangedHandler = (event) => {
    this.setState( {
       persons:[
         { name: 'Max', age: 28},
         { name: event.target.value, age: 29},
         { name: 'Stephanie', age: 25}
       ]
     } )
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
        {
          this.state.showPersons === true ?
          <div className="Person-list">
            <button
              onClick={() => this.switchNameHandler('Super Stephen')}>Change Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
             name={this.state.persons[1].name}
             age={this.state.persons[1].age}
             click={this.switchNameHandler.bind(this, 'Silly Sally')}
             changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />

        </div> : null
      }


      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
