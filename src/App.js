import React, { Component } from 'react';
import Timer from './components/Timer/Timer';
import './App.css';


class App extends Component {
constructor(){
  super()
  this.state = {
    timeStart: false, //set the state of timer to FALSE to start
  }
}


timerClick = (timeStart) => {
  this.setState({timerStart: true}) //if timer is clicked set state to TRUE; IT WORKS 
  let counter = 0;
  while (counter < 1) {
    console.log('CLICKKKKK')
    let i = new Date().toLocaleTimeString()
     document.getElementById('clock').insertAdjacentHTML('beforeend','<h1>'+ i +'</h1>')
     // setInterval(timerClick, 1000);
    } 

  }
// setInterval(timerClick,1000);

render() {
  return (
    <div className="App">
      <Timer timerClick={this.timerClick}/>
    </div>
    );
  }
}

export default App;
