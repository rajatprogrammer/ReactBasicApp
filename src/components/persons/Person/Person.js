import React, { Component } from 'react';
import classes from './Person.css';
import PropsType from 'prop-types';
import Aux from '../../../Hoc/Auxiliary';
import withclass from '../../../Hoc/WithClassName';

class Person extends Component {
    // componentDidMount() {
    //     document.querySelector('input').focus();
    // }
    componentDidMount() {
        //     this.inputEL.focus();
        this.inputElementRef.current.focus();
    }
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    render() {
        return (
            <Aux >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                    onChange={this.props.changed}
                    // ref={(inputEL) => { this.inputEL = inputEL; }}
                    ref={this.inputElementRef}
                    value={this.props.name}
                />
            </Aux>
        )
    }
};

Person.PropsType = {
    click: PropsType.func,
    name: PropsType.string,
    age: PropsType.number,
    changed: PropsType.func
}

export default withclass(Person, classes.Person); 