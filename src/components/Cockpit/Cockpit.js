import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {
    const toggelBtnRef = useRef(null);
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
        // setTimeout(() => {
        //     alert("data is saved to cloud !");
        // }, 1000);
        toggelBtnRef.current.click();
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
    if (props.personslength === 1) {
        className.push(classes.red);
    }
    else if (props.personslength === 2) {
        className.push(classes.bold);
    }
    else if (props.personslength === 0) {
        className.length = 0;
        className.push(classes.blue);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={className.join(" ")}>This is really working!</p>
            <button
                ref={toggelBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <br></br>
            <AuthContext.Consumer>
                {
                    (context) => {
                        return (
                            <button onClick={context.login}>Log In</button>
                        )
                    }
                }
            </AuthContext.Consumer>
        </div>
    );
}
export default React.memo(cockpit);