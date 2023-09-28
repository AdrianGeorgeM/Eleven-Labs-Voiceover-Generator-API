import React from 'react';
import styles from './LoadingIndicator.module.css';

function LoadingIndicator({ isLoading }) {
	return (
		<div className={styles.loadingContainer}>{isLoading && <div>Loading...</div>}</div>
	);
}

export default LoadingIndicator;
