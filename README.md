# React Chatbot Using OpenAI API

This project is a single-page React application that implements a chatbot using the OpenAI API. It provides a user interface to interact with the chatbot and includes different specialization options for the bot.

## Table of Contents


- [React Chatbot Using OpenAI API](#react-chatbot-using-openai-api)
  - [Introduction](#introduction)
  - [Getting Started with Create React App](#getting-started-with-create-react-app)
    - [Available Scripts](#available-scripts)
    - [Learn More](#learn-more)
  - [Code Overview](#code-overview)
  - [Project Structure](#project-structure)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)

## Introduction

This project creates an interactive chatbot using React and the OpenAI API. Users can ask questions, and the chatbot responds based on its specialization, which can be selected by the user. The chatbot can specialize in general knowledge, software development, psychology, mathematics, chemistry, history, or geography.

The application is designed to limit API calls to OpenAI's GPT-3.5-turbo model to prevent exceeding the rate limit. It also manages error states and displays appropriate error messages to the user.

We'll fill in the other sections ("Project Structure", "Environment Variables", "Usage", "Contributing", "License") as we progress through this task.

---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Project Structure

Below is the main structure of the project, showcasing important files:

<pre>
project-root
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── background.jpg
│   ├── index.js
│   ├── Chatbot.js    # Main React component for chatbot interaction
│   └── Chatbot.css   # Styles for the chatbot component
├── .gitignore
├── package.json
└── README.md
</pre>

Here is a brief overview of the main files:

- `Chatbot.js`: This file contains the main functionality of the chatbot. It communicates with the OpenAI API and handles user input and bot responses. It also manages the state of the chatbot, including the messages and the bot's specialization.

- `Chatbot.css`: This file includes the styles for the Chatbot component. It styles the chatbot window, the messages, and the input form, and also includes responsiveness for different screen sizes.

- `App.js` and `index.js`: These are the entry points of the React application. They render the Chatbot component.

- `package.json`: This file contains various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project and handle the project's dependencies.

- `README.md`: The file you are reading right now! A text file containing useful reference information about your project.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `REACT_APP_OPENAI_API_KEY`: This is your OpenAI API key. It's used to authenticate your application's requests to the OpenAI API. For security reasons, it's important to keep this key secret. You can obtain it from your account settings on the OpenAI website.

Remember, never share your `.env` file or include it in your version control system. It contains sensitive information and should remain private.

### Creating the `.env` File

If you don't already have a `.env` file at the root of your project, create one. Inside this file, add your environment variables like this:

```env```
```REACT_APP_OPENAI_API_KEY=yourapikey```

Replace yourapikey with your actual OpenAI API key. Once you have added the environment variables, save and close the .env file.

With the .env file in place and the REACT_APP_OPENAI_API_KEY environment variable set, your application is ready to interact with the OpenAI API.

## Installation

Follow these steps to set up and run this project locally.

1. **Clone the repository**

    Use the following command to clone this repository to your local machine.

    ```bash
    git clone https://github.com/Will-2332/digital-tuttor.git
    ```

2. **Setup Environment Variables**

    Rename the `.env.sample` file to `.env` and replace `yourapikey` with your OpenAI API key.

    ```env
    REACT_APP_OPENAI_API_KEY=yourapikey
    ```

3. **Install Dependencies**

    Navigate to the project directory and run the following command to install necessary dependencies:

    ```bash
    cd digital-tuttor
    npm install
    ```

4. **Start the Application**

    To start the application, run:

    ```bash
    npm start
    ```

    The application will start on `http://localhost:3000`.


## Usage

To interact with the chatbot:

1. Navigate to the webpage hosting the application.
2. Select the desired tutoring specialty from the dropdown menu at the top of the page. Options include "General," "Software Development," "Psychology," "Mathematics," "Chemistry," "History," and "Geography."
3. Type your message or question into the input box at the bottom of the page.
4. Press "Send" or hit the "Enter" key to submit your message. The message will then appear in the chatbox.
5. The bot will process your message and respond as quickly as possible. The bot's response will appear in the chatbox.

### Tips for Interacting with the Chatbot

- Make sure your questions are clear and specific to get the most accurate responses.
- If the bot does not understand your message, try rephrasing it or asking a simpler question.
- Remember, the bot specializes in the topic you selected from the dropdown menu. It may not be able to provide accurate responses to questions outside of its specialty.


## Code Overview

This application is a single-page web app built with React. It uses the OpenAI API to implement an interactive chatbot. The core logic for the chatbot is contained in `chatbot.js`. The main features and functions of the codebase are as follows:

- **React Hooks**: The application uses React Hooks (`useState`, `useEffect`) for state management within functional components. The state primarily consists of the current user message, the list of all messages, and the current chatbot specialty.

- **OpenAI API Interaction**: The OpenAI API is utilized in `chatbot.js` to generate chatbot responses. It takes the user message and the current bot specialty as input and generates a message as the bot’s response.

- **Async/Await**: The async/await syntax is used for handling promises when interacting with the OpenAI API.

- **Error Handling**: Error handling mechanisms are in place to manage and limit the number of API calls and to handle any errors returned by the API.

- **Styling**: The application is styled using a combination of CSS (in `chatbot.css`) and Bootstrap. Responsive design principles have been applied to ensure the chatbot looks good on both desktop and mobile.

- **Environment Variables**: The `.env` file is used to manage sensitive data (like the OpenAI API key). This is not committed to the git repository.

- **Node & npm**: Node.js and npm are used for managing dependencies. The `package.json` file contains the list of dependencies and scripts for running the application.


Please note that this is a brief overview and may not cover every aspect of the codebase. It's recommended to go through the actual code for a complete understanding.


## Contributing

We welcome contributions of all sorts and sizes. This includes everything from simple bug reports to large features.

### Reporting Bugs

We use GitHub for bug tracking. Please search the existing issues for your bug and create a new one if necessary.

Make sure your description is clear and has sufficient instructions to be able to reproduce the issue.

### Feature Requests

We use GitHub for tracking feature requests. Please search the existing issues for your feature request and create a new one if necessary.

### Pull Requests

We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.

### Coding Guidelines

To ensure consistency throughout the source code, please follow these coding guidelines:

1. Code should adhere to the general coding standards of React and JavaScript.
2. Use clear, descriptive variable and function names.
3. Document all functions with comments to explain what they do.

### Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

Please report unacceptable behavior to willian.musquim@gmail.com
