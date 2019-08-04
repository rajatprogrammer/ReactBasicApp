import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons : [
      {name:"RAMU KAK" ,age:23},
      {name:"RAMU KAKI" ,age:23},
      {name:"RAMU KANJU" ,age:23}
    ]
  }

  switchNameHandler = (Name)=>{
    this.setState({
      persons : [
        {name:"RAMU KAK23" ,age:23},
        {name:Name ,age:29},
        {name:"RAMU KANJU239823" ,age:20}
      ]
    })
  }
  NameChaneHandler = (event)=>{
    this.setState({
      persons : [
        {name:"RAMU KAK23" ,age:23},
        {name:event.target.value ,age:29},
        {name:"RAMU KANJU239823" ,age:20}
      ]
    })
  }

  resetStateHandler = ()=>{
    this.setState({
      persons : [
        {name:"RAMU KAK" ,age:23},
        {name:"RAMU KAKI" ,age:23},
        {name:"RAMU KANJU" ,age:23}
      ]
    })
  }

  render() {
    return (
      <div className="App" id="123">
        <header className="App-header">
          <h1>I am react begineer</h1>
        </header>
        <div> 
        {/* <input type="radio" onClick={this.switchNameHandler}></input>
        <input type="radio"onClick={this.resetStateHandler}></input> */}
        </div>
        <button onClick={()=>this.switchNameHandler("RAJAT BOSS")}>submit</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>THIS IS GOOD</Person>
        <Person name ={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,"rohanSIR")} changed={this.NameChaneHandler}>THIS IS BAD</Person>
        <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}>THIS IS BAD</Person>
      </div>
    );
  }
}

export default App;
