import React, { Component } from 'react';
import classes from './Person.css';


// class based new component that is starting with an uppercase inorder to use this component in the same file.
//function
class Person extends Component {
  render(){
    console.log('[Person.js] rendering...');

   return (
        <div className={classes.Person}>
          <p onClick={this.props.click}>I'm a {this.props.name} I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed}  value={this.props.name}/>
        </div>
  );
 }
};

export default Person;
