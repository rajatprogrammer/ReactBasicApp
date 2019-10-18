import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import PersonsArray from '../components/persons/person';
import Paragraph from '../components/persons/Person/paragraph';
import WithClass from '../Hoc/WithClassName';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: "ddsd1", name: 'Max', age: 28 },
      { id: "2323232", name: 'Manu', age: 29 },
      { id: "323232s", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    length: 0,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[get getDerivedStateFromProps]', props);
    return state
  }
  // componentWillMount() {
  //   console.log('[APP.js] component will mount')
  // }
  componentDidMount() {
    console.log('[APP.js] component did mount')
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    persons.forEach((person, index) => {
      if (person.id === id) {
        person.name = event.target.value;
        persons[index] = person;
        return false;
      }
    })
    this.setState({ persons: persons });
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  paragraphLengthCalculate = (event) => {
    this.setState({ length: event.target.value.length })
  }

  render() {
    console.log("[App.js] render methord")

    let persons = null;
    let CockpitMeth = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            <PersonsArray
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            />
          }
        </div>
      )
    }

    if (this.state.showCockpit) {
      CockpitMeth = (
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
          personslength={this.state.persons.length}
        />
      )
    }

    let paragraphTest = (
      <div>
        <Paragraph
          length={this.state.length}
          changed={(event) => { this.paragraphLengthCalculate(event) }}
        />
      </div>
    )

    return (
      <WithClass className={classes.App}>
        <button onClick={() => {
          this.setState({
            showCockpit: false
          })
        }}>Remove Cockpit</button>
        {CockpitMeth}
        {persons}
        {paragraphTest}
      </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
