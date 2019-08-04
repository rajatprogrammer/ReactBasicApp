import React from 'react';
import './Person.css'
const person = (props)=>{
    return (
        <div className="person">  
            <p onClick ={props.click}>I am person name{props.name} and I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div> 
    )
}

export default person;