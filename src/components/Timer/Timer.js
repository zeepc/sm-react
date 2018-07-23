import React from 'react';
import './timer.css';

const Timer = ({ timerClick, increment }) => {

return (
	<div>
		<div id='big-timer'>
			<p id='clock'></p>
		</div>
	<div className='timer-button'>
	<button className='btn btn-danger' id='startSplit' onClick={timerClick}>Set Timer</button>
			<ul id='list'></ul>	
	</div>
	</div>
	)
}


export default Timer;