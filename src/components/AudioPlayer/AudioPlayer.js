import React from 'react';
import styles from './AudioPlayer.module.css';

function AudioPlayer({ audioSrc }) {
	return (
		<div className={styles.audioPlayerContainer}>
			{audioSrc && <audio controls src={audioSrc} className={styles.audio} />}
		</div>
	);
}

export default AudioPlayer;
