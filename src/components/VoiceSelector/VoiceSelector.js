import React from 'react';
import styles from './VoiceSelector.module.css';

function VoiceSelector({ voices, selectedVoice, onVoiceChange }) {
	return (
		<div className={styles.selectorContainer}>
			<label>
				Voice:
				<select
					value={selectedVoice}
					onChange={(e) => onVoiceChange(e.target.value)}
					className={styles.select}
				>
					{voices.map((voice) => (
						<option key={voice.voice_id} value={voice.voice_id}>
							{voice.name}
						</option>
					))}
				</select>
			</label>
		</div>
	);
}

export default VoiceSelector;
