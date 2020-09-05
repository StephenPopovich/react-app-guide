import React from 'react';
import classes from './Person.css';


// new component that is starting with an uppercase inorder to use this component in the same file.
//function
const person = (props) => {
  const rnd = Math.random();

  if (rnd > 0.7){
    throw new Error('Something went wrong, yo,');
  }
   return (
        <div className={classes.Person}>
          <p onClick={props.click}>I'm a {props.name} I am {props.age} years old!</p>
          <p>{props.children}</p>
          <input type="text" onChange={props.changed}  value={props.name}/>
        </div>
 )
};

export default person;
