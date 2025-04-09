# LanguageSelector-Context 🌐

**LanguageSelector-Context** is a simple React project that demonstrates how to use the `useContext` hook to manage global state for language selection. 🌍 This project focuses on creating a flexible and reusable language selector that can easily be integrated into any React application.

## Features ✨

- **Multiple Languages**: The app allows users to choose between multiple languages such as English, Spanish, and French. 🇬🇧🇪🇸🇫🇷
- **Global State Management**: The language state is managed globally using the `useContext` hook and a `languageReducer`. 🔄
- **Styled Components**: The application uses a clean and modern CSS structure to change the language dynamically based on user interaction. 🎨

## How it works ⚙️

The app leverages the `useContext` and `useReducer` hooks to manage the language state across the application. Here's a brief overview of how it functions:

1. **`LanguageContext.jsx`**: Provides the context for the language state (`en`, `es`, `fr`) and a function (`changeLanguage`) to switch between the languages. 🌍
2. **`LanguageSelector.jsx`**: A component with a dropdown to select the language. When a user selects a language, it updates the context and changes the app's language globally. 📝
3. **`Greeting.jsx`**: Displays a greeting message that changes dynamically based on the selected language. 🌎
4. **`App.jsx`**: The main component that includes all other components and applies the global `LanguageContext` to the application. 🏗️
