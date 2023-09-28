import React from 'react';
import styles from './ModelSelector.module.css';
function ModelSelector({ models, selectedModel, onModelChange }) {
	return (
		<div className={styles.selectorContainer}>
			<label>
				Model:
				<select
					value={selectedModel}
					onChange={(e) => onModelChange(e.target.value)}
					className={styles.select}
				>
					{models.map((model) => (
						<option key={model.model_id} value={model.model_id}>
							{model.name}
						</option>
					))}
				</select>
			</label>
		</div>
	);
}

export default ModelSelector;
