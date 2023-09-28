# Eleven Labs Voiceover Generator App

This is a React web application that utilizes the Eleven Labs Voiceover Generator API. It allows you to generate voiceovers based on text input and provides advanced options for customizing the voiceover.

## Features

- Select from available models.
- Choose a voice from the available options.
- Customize voice settings like pitch and speed.
- Generate voiceovers from entered text.
- Clear text and audio.
- Toggle metadata display.

## Future Enhancements
Here are some potential areas for improvement in this application:

1. **User Authentication:** Incorporate user authentication to enable users to save and manage their voiceover projects securely.

2. **Enhanced Styling:** Elevate the user interface and styling to provide a more polished and visually appealing experience.

3. **Error Handling:** Strengthen error handling mechanisms and offer informative error messages to enhance the user experience.

4. **Additional Voice Settings:** Introduce advanced voice settings, allowing users to fine-tune their voiceovers according to their preferences.

5. **Project History:** Maintain a history of generated voiceovers, enabling users to review and re-download previous projects.

6. **Export Options:** Provide users with the ability to export voiceovers in various formats or share them directly on social media platforms.

7. **Usage Analytics:** Implement analytics to gain insights into user interactions with the application, helping us identify areas for improvement and optimization.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/AdrianGeorgeM/Eleven-Labs-Voiceover-Generator-API
   ```

2. Navigate to the project directory:

   ```shell
   cd Eleven-Labs-Voiceover-Generator-API
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
   
## Future Improvements
Here are some potential future improvements for this application:

1. User Authentication: Implement user authentication to allow users to save and manage their voiceover projects.
2. Enhanced Styling: Improve the user interface and styling for a more polished look.
3. Error Handling: Implement more robust error handling and provide detailed error messages to users.
4. Additional Voice Settings: Add more advanced voice settings for users to fine-tune voiceovers.
5. Project History: Keep a history of generated voiceovers for users to review and re-download.
6. Export Options: Allow users to export voiceovers in different formats or share them directly to social media.
7. Usage Analytics: Implement analytics to understand how users interact with the application and identify areas for improvement.
## Dependencies

This project relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- Eleven Labs Voiceover Generator API: Used to generate voiceovers.
- Other dependencies for components and state management.
=
## Acknowledgments

- Thanks to Eleven Labs for providing the The [API](https://docs.elevenlabs.io/api-reference/quick-start/introduction).
- Inspired by projects that utilize text-to-speech technology.
