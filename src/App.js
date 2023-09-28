import React, { useState } from 'react';
import ModelSelector from './components/ModelSelector/ModelSelector';
import VoiceSelector from './components/VoiceSelector/VoiceSelector';
import TextArea from './components/TextArea/TextArea';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import VoiceMetadata from './components/VoiceMetadata/VoiceMetadata';
import AdvancedOptions from './components/AdvancedOptions/AdvancedOptions';
import { generateVoiceover } from './helpers/api';
import { useModels } from './hooks/useModels';
import { useVoices } from './hooks/useVoices';
import './App.css';

function App() {
	const { models, selectedModel, setSelectedModel } = useModels();
	const { voices, selectedVoice, setSelectedVoice, voiceMetadata } =
		useVoices(selectedModel);
	const [text, setText] = useState('');
	const [audioSrc, setAudioSrc] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [feedbackMessage, setFeedbackMessage] = useState('');
	const [showMetadata, setShowMetadata] = useState(false);
	const [pitch, setPitch] = useState(1);
	const [speed, setSpeed] = useState(1);

	const handleGenerateVoiceover = async () => {
		setIsLoading(true);
		setFeedbackMessage('Generating voiceover...');
		try {
			const audioData = await generateVoiceover(selectedVoice, text, selectedModel, {
				pitch,
				speed,
			});
			setAudioSrc(audioData);
			setFeedbackMessage('Voiceover generated successfully.');
		} catch (error) {
			setFeedbackMessage('Error generating voiceover. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleClearText = () => {
		setText('');
		setAudioSrc('');
		setFeedbackMessage('');
	};

	return (
		<div className='App'>
			<header className='header'>
				<h1>Eleven Labs Voiceover Generator API</h1>
			</header>
			<main className='main'>
				<div className='controls'>
					<ModelSelector
						models={models}
						selectedModel={selectedModel}
						onModelChange={setSelectedModel}
					/>
					<VoiceSelector
						voices={voices}
						selectedVoice={selectedVoice}
						onVoiceChange={setSelectedVoice}
					/>
					<TextArea text={text} onTextChange={setText} />
					<AdvancedOptions
						pitch={pitch}
						setPitch={setPitch}
						speed={speed}
						setSpeed={setSpeed}
					/>
					<div className='button-group'>
						<button
							className='generate-button'
							onClick={handleGenerateVoiceover}
							disabled={!text}
						>
							Generate Voiceover
						</button>
						<button className='clear-button' onClick={handleClearText}>
							Clear Text
						</button>
						<button
							className='metadata-toggle-button'
							onClick={() => setShowMetadata(!showMetadata)}
						>
							{showMetadata ? 'Hide Metadata' : 'Show Metadata'}
						</button>
					</div>
					{feedbackMessage && <p className='feedback'>{feedbackMessage}</p>}
				</div>
				<div className='media'>
					<LoadingIndicator isLoading={isLoading} />
					<AudioPlayer audioSrc={audioSrc} />
				</div>
				{showMetadata && voiceMetadata && <VoiceMetadata voiceMetadata={voiceMetadata} />}
			</main>
			<footer className='footer'>
				<p>Eleven Labs Voiceover Generator API</p>
			</footer>
		</div>
	);
}

export default App;
