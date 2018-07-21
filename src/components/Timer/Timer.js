import React from 'react';
import './timer.css';

const Timer = ({ timerClick, startTimer }) => {

return (
	<div className='timer-button'>
	<button className='btn btn-danger' onClick={timerClick}>Set Timer</button>
		<div id='clock' onClick={startTimer}></div>
		
	</div>
	)
}


export default Timer;