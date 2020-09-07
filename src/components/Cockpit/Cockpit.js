import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    // A variable that creates an array of strings, which are the new classes I added to the CCS file
    // join() turn an array of strings into one strings which in the end is "red bold"
    // let classes = ['red', 'bold'].join(' ');
    // an if statement/check that changes the class if their are 2 or less elements (persons).
    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersos) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2){
        assignedClasses.push(classes.red); //assignedClasses = ['red']
    }
        // an if statement/check that changes the class if their are 1 or less elements (persons).
    if (props.persons.length <= 1){
        assignedClasses.push(classes.bold); //assignedClasses = ['red bold']
    }

    return (
     <div className={classes.Cockpit}>
        <h1 className="App-title">{props.title}</h1>
        <p>Classes won't work now because it is any array, must use join() with an empty space assigning a string which is a join array of our new classes:</p>
        <p className={assignedClasses.join(' ')}>
        This is one of my first React applications
        </p>
        <button className={btnClass} 
        onClick={props.clicked}>Toggle Persons</button>
     </div>
    );
};

export default cockpit;