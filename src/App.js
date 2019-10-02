import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Paragraph from './Person/paragraph';


class App extends Component {
  state = {
    persons: [
      { id:"ddsd1",name: 'Max', age: 28 },
      { id:"2323232",name: 'Manu', age: 29 },
      { id : "323232s",name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    length: 0
  }

  switchNameHandler = ( newName ) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event,id ) => {
    const persons = [...this.state.persons];
    persons.forEach((person,index)=>{
      if(person.id === id){
        person.name=event.target.value;
        persons[index] = person;
        return false;
      }
    })
    this.setState({persons:persons});
  }
  deletePersonHandler = (personIndex)=>{
    const persons = [...this.state.persons] ;
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglePersonHandler = () =>{
    this.setState({showPersons: !this.state.showPersons})
  }

  paragraphLengthCalculate = (event) =>{
    this.setState({length:event.target.value.length})
  }
  
  render () {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
   
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {
             this.state.persons.map((person,index)=>{
              return <Person 
              click = {()=>this.deletePersonHandler(index)}
              name={person.name} 
              age = {person.age} 
              key = {person.id}
              changed = {(event)=>{this.nameChangedHandler(event,person.id)}}
              />
            })
          }
        </div>
      )
      style.backgroundColor='red';
      // persons = (
      //   <div>
      //     <Person
      //       name={this.state.persons[0].name}
      //       age={this.state.persons[0].age} />
      //     <Person
      //       name={this.state.persons[1].name}
      //       age={this.state.persons[1].age}
      //       click={this.switchNameHandler.bind( this, 'Max!' )}
      //       changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
      //     <Person
      //       name={this.state.persons[2].name}
      //       age={this.state.persons[2].age} />
      //   </div>
      // );
    }
    let className = [];
    if(this.state.persons.length===1){
      className.push('red');
    }
    else if(this.state.persons.length==2){
      className.push('bold');
    }
    else if(this.state.persons.length===0){
      className.length=0;
      className.push('blue');
    }

    let paragraphTest = (
      <div>
        <Paragraph
        length = {this.state.length}
        changed = {(event)=>{this.paragraphLengthCalculate(event)}} 
        />
      </div>
    )

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={className.join(" ")}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
        {paragraphTest}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
