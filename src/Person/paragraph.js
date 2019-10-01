import React from 'react';

import './Person.css';

const paragraph = ( props ) => {
    return (
        <div className="Person">
            <p >The Length of the paragaraph {props.length}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.data}/>
        </div>
    )
};

export default paragraph;