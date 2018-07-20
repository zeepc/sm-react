import React, { Component } from 'react';
import Timer from './components/Timer/Timer';
import './App.css';


class App extends Component {
constructor(){
  super()
  this.state = {
    timeStart: false, //set the state of timer to false
  }
}


timerClick = (timeStart) => {
  this.setState({timerStart: true}) //if timer is clicked set state to true; IT WORKS
  const counter = 1;
  if (counter === 1) {
    console.log('I was clicked!!!!!!!!!!');
  }
}

  render() {
    return (
      <div className="App">
        <Timer timerClick={this.timerClick}/>
      </div>
    );
  }
}

export default App;
