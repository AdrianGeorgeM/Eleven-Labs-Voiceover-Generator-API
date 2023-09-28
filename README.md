# Eleven Labs Voiceover Generator App

This is a React web application that utilizes the Eleven Labs Voiceover Generator API. It allows you to generate voiceovers based on text input and provides advanced options for customizing the voiceover.

## Features

- Select from available models.
- Choose a voice from the available options.
- Customize voice settings like pitch and speed.
- Generate voiceovers from entered text.
- Clear text and audio.
- Toggle metadata display.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/yourusername/elevenlabs-voiceover-generator.git
   ```

2. Navigate to the project directory:

   ```shell
   cd elevenlabs-voiceover-generator
   ```

3. Install the project dependencies using npm or yarn:

   ```shell
   npm install
   # or
   yarn install
   ```

4. Set up your environment variables:

   - Create a `.env` file in the project root.
   - Add your Eleven Labs API key to the `.env` file:

     ```
     REACT_APP_ELEVENLABS_API_KEY=your-api-key-here
     ```

5. Start the development server:

   ```shell
   npm start
   # or
   yarn start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the application.

## Usage

1. Select a model and a voice from the dropdowns.
2. Enter the text you want to convert to a voiceover.
3. Adjust the pitch and speed settings if needed.
4. Click the "Generate Voiceover" button to create the voiceover.
5. You can clear the text and audio using the "Clear Text" button.
6. To show/hide metadata, click the "Show Metadata" or "Hide Metadata" button.
   
## Dependencies

This project relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- Eleven Labs Voiceover Generator API: Used to generate voiceovers.
- Other dependencies for components and state management.
=
## Acknowledgments

- Thanks to Eleven Labs for providing the The [API](https://docs.elevenlabs.io/api-reference/quick-start/introduction).
- Inspired by projects that utilize text-to-speech technology.
