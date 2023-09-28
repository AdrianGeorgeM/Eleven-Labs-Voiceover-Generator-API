import React from 'react';
import styles from './TextArea.module.css';

function TextArea({ text, onTextChange }) {
	return (
		<div className={styles.textAreaContainer}>
			<textarea
				placeholder='Type text here'
				value={text}
				onChange={(e) => onTextChange(e.target.value)}
				className={styles.textarea}
			></textarea>
		</div>
	);
}

export default TextArea;
