import { useState, useEffect } from 'react';
import { fetchVoices, getVoiceMetadata } from '../helpers/api';

export const useVoices = (selectedModel) => {
	const [voices, setVoices] = useState([]);
	const [selectedVoice, setSelectedVoice] = useState('');
	const [voiceMetadata, setVoiceMetadata] = useState(null);

	useEffect(() => {
		const initVoices = async () => {
			if (selectedModel) {
				try {
					const voicesData = await fetchVoices(selectedModel);
					setVoices(voicesData.voices);
					const initialSelectedVoice = voicesData.voices[0]?.voice_id;
					setSelectedVoice(initialSelectedVoice);

					if (initialSelectedVoice) {
						const voiceMetadataData = await getVoiceMetadata(initialSelectedVoice);
						setVoiceMetadata(voiceMetadataData);
					}
				} catch (error) {
					console.error('Error fetching voices or voice metadata:', error);
				}
			}
		};

		initVoices();
	}, [selectedModel]);

	return {
		voices,
		selectedVoice,
		setSelectedVoice,
		voiceMetadata,
	};
};
