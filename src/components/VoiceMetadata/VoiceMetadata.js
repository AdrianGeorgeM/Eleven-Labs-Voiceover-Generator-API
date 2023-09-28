import React from 'react';
import styles from './VoiceMetadata.module.css';

function VoiceMetadata({ voiceMetadata }) {
	return (
		<div className={styles['voice-metadata']}>
			<h2 className={styles['metadata-heading']}>Voice Metadata</h2>
			<pre className={styles['metadata-pre']}>
				{JSON.stringify(voiceMetadata, null, 2)}
			</pre>
		</div>
	);
}

export default VoiceMetadata;
