import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

// App is our main component and holds our state

//Left off on 91 Component Update Lifecycle (for props Changes)

class App extends Component {
  constructor(props) {
     super(props);
     console.log('App.js] constructor');
  }

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
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

 componentDidMount() {
   console.log('[App.js] componentDidMount');
 }

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
  console.log('[App.js] render');
  let persons = null;
//  a button class variable which initally is an Array, a pointer at this unique class name which is generate by CSS Module package.


//Conditionally outputs content/data
//Map operator a default JavaScript method you can use on arrays to map your JavaScript array of objects or strings into an array of JSX elements and render for the screen for you.
//Map also give you the element for which it is currently excuting its function, but also the index for example when you need to remove an element (which needs a key property like id)
  if ( this.state.showPersons ) {
       persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
  }


    return (
      <div className={classes.App}>
          <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
         {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

// Calling radium as a function and wrap your app with it. A higher order component. A component wrapping a component adding/injecting extra functionality.
// Can be used on components created with class and extends components as well as functional components.
export default App;
