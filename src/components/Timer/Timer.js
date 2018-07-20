import React from 'react';
import './timer.css';

const Timer = ({ timerClick }) => {

return (
	<div className='timer-button'>
	<button className='btn btn-danger' onClick={timerClick}>Set Timer</button>
		
	</div>
	)
}


export default Timer;