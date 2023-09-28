const API_BASE_URL = 'https://api.elevenlabs.io/v1';

const headers = {
	'xi-api-key': process.env.REACT_APP_ELEVENLABS_API_KEY,
	'Content-Type': 'application/json',
};

const handleResponse = async (response) => {
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(
			`Error: ${response.status} - ${errorData.message || response.statusText}`
		);
	}
	return response.json();
};

const apiRequest = async (endpoint, options = {}) => {
	try {
		const response = await fetch(`${API_BASE_URL}${endpoint}`, {
			...options,
			headers: { ...headers, ...options.headers },
		});
		return handleResponse(response);
	} catch (error) {
		console.error('There has been a problem with your fetch operation:', error);
		throw error;
	}
};

export const fetchModels = () => apiRequest('/models');

export const fetchVoices = () => apiRequest('/voices');

export const generateVoiceover = async (selectedVoice, text, selectedModel) => {
	const requestBody = {
		text,
		model_id: selectedModel,
		voice_settings: {
			stability: 0,
			similarity_boost: 0,
			style: 0,
			use_speaker_boost: true,
		},
	};

	try {
		const response = await fetch(`${API_BASE_URL}/text-to-speech/${selectedVoice}`, {
			method: 'POST',
			headers,
			body: JSON.stringify(requestBody),
		});

		const blob = await response.blob();
		if (!blob.type.startsWith('audio/')) {
			throw new Error('Received an invalid audio response.');
		}

		const audioUrl = URL.createObjectURL(blob);
		return audioUrl;
	} catch (error) {
		console.error('There has been a problem with your fetch operation:', error);
		throw error;
	}
};

export const getVoiceMetadata = (voiceId) => apiRequest(`/voices/${voiceId}`);
