import React, { Component } from 'react';
import Timer from './components/Timer/Timer';
import './App.css';


class App extends Component {
constructor(){
  super()
  this.state = {
    timeStart: false, //set the state of timer to FALSE to start
    time: 0,
    timer: 0,
  }
}

timerClick = (running, time, hours, mins, secs, tenths) => {
  this.setState({timerStart: true}) //if timer is clicked set state to TRUE; IT WORKS 
  running = 0;
  time = 0;
  hours = Math.floor(time/10/60/60);
  mins = Math.floor(time/10/60);
  secs = Math.floor(time/10);
  tenths = time % 10;
  // console.log('CLICKKKKK');
  if(running === 0){
    running = 1;
   this.increment();
    document.getElementById('startSplit').innerHTML = "Split";
  } else {
    console.log('its hitting else')
    running = 1;
    this.increment();
  document.getElementById('list').insertAdjacentHTML('beforeend',`<a><li>${this.hours} :  ${this.mins}  :  ${this.secs}  :  ${this.tenths} </li></a>`);
  }
}

 increment = (running, time, hours, mins, secs, tenths) => {
  if (running === 1) {
    setTimeout(function(){
     this.time++;
      hours = Math.floor(this.time/10/60/60);
      mins = Math.floor(this.time/10/60);
      secs = Math.floor(this.time/10) ;
      tenths = this.time % 10;
   
    if(hours < 10){
      hours = "0" + hours;
    }
    if(mins < 10){
      mins = "0" + mins;
    }
    if(secs < 10){
      secs = "0" + secs;
    }
     document.getElementById('clock').innerHTML =`${hours} : ${mins} : ${secs} : ${tenths}`;
     this.increment(); 
    },100);
  }  
}


 componentDidMount(){
  console.log('DID MOUNT');
 }

render() {
  return (
    <div className="App">
      <Timer timerClick={this.timerClick} increment={this.increment}/>
    </div>
    );
  }
}

export default App;
