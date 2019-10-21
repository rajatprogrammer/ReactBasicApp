import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
    static getDerivedStatesFromProps(props, State) {
        console.log("[get Derived States From Props ] lifecycle  from person.js");
        return State;
    }
    shouldComponentUpdate(nextprops, nextState) {
        console.log("[shouldComponentUpdate] lifecycle from person.js");
        if (nextprops.persons !== this.props.persons) {
            return true
        } else {
            return false;
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevsState) {
        console.log("[getSnapshotBeforeUpdate] lifecycle from person.js" + JSON.stringify(prevProps) + " " + JSON.stringify(prevsState));
        return { snapshot: "hello update" };
    }
    componentDidUpdate(prevProps, prevsState, snapshot) {
        console.log("[componentDidUpdate] lifecycle from person.js" + JSON.stringify(snapshot));
    }
    componentWillUnmount() {
        console.log("[componentWillUnmount] lifecycle from person.js");
    }
    render() {
        console.log("[Persons.js rendring]")
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => { this.props.changed(event, person.id) }}
                    isAuth={this.props.isAuthenticated}
                />
            })
        )
    }
}


export default Persons;