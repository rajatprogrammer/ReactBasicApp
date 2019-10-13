import React, { useEffect } from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
    // useEffect(() => {
    //     console.log("cockpit useEffect");
    //     setTimeout(() => {
    //         alert("data is saved to cloud !");
    //     }, 1000);
    //     return () => {
    //         console.log("cockpit.js component is removed");
    //     }
    // }, [props.persons]);

    useEffect(() => {
        console.log("cockpit useEffect");
        setTimeout(() => {
            alert("data is saved to cloud !");
        }, 1000);
        return () => {
            console.log("cockpit.js component is removed");
        }
    }, []);
    useEffect(() => {
        return () => {
            console.log("cockpit.js 2nd component is removed");
        }
    });

    //useEffect
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red
    }
    let className = [];
    if (props.persons.length === 1) {
        className.push(classes.red);
    }
    else if (props.persons.length === 2) {
        className.push(classes.bold);
    }
    else if (props.persons.length === 0) {
        className.length = 0;
        className.push(classes.blue);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={className.join(" ")}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}
export default cockpit;