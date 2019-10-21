import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import PersonsArray from '../components/persons/person';
import Paragraph from '../components/persons/Person/paragraph';
import withClass from '../Hoc/WithClassName';
import Aux from '../Hoc/Auxiliary';


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
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
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
              isAuthenticated={this.state.authenticated}
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
          login={this.loginHandler}
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
      <Aux>
        <button onClick={() => {
          this.setState({
            showCockpit: false
          })
        }}>Remove Cockpit</button>
        {CockpitMeth}
        {persons}
        {paragraphTest}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
