import React from 'react';

const AdvancedOptions = ({ pitch, setPitch, speed, setSpeed }) => (
	<div className='advanced-options'>
		<label>Pitch:</label>
		<input
			type='range'
			min='0'
			max='2'
			step='0.1'
			value={pitch}
			onChange={(e) => setPitch(parseFloat(e.target.value))}
		/>
		<label>Speed:</label>
		<input
			type='range'
			min='0.5'
			max='2'
			step='0.1'
			value={speed}
			onChange={(e) => setSpeed(parseFloat(e.target.value))}
		/>
	</div>
);

export default AdvancedOptions;
