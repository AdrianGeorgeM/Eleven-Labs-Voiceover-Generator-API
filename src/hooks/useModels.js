import { useState, useEffect } from 'react';
import { fetchModels } from '../helpers/api';

export const useModels = () => {
	const [models, setModels] = useState([]);
	const [selectedModel, setSelectedModel] = useState('');

	useEffect(() => {
		const initModels = async () => {
			try {
				const modelsData = await fetchModels();
				setModels(modelsData);
				setSelectedModel(modelsData[0]?.model_id);
			} catch (error) {
				console.error('Error fetching models:', error);
			}
		};

		initModels();
	}, []);

	return {
		models,
		selectedModel,
		setSelectedModel,
	};
};
