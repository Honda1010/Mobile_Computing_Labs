# MyTodoList

A simple Todo List mobile app built with **Expo** and **React Native**.

## Features

- Add new goals/tasks
- Delete tasks by tapping the X button
- Live task counter
- Empty state message when no tasks exist
- Custom blue & white UI with Roboto font
- Keyboard-aware layout (iOS & Android)

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Expo](https://expo.dev) | Build & run React Native apps |
| [React Native](https://reactnative.dev) | UI framework |
| [@expo-google-fonts/roboto](https://github.com/expo/google-fonts) | Roboto font |

## Project Structure

```
MyTodoList/
├── App.js          # Main app component (all UI & logic)
├── index.js        # Entry point
├── app.json        # Expo configuration
├── package.json
├── tsconfig.json
└── assets/images/  # App icons & splash screen
```

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

3. **Run on device**
   - Scan the QR code with [Expo Go](https://expo.dev/go)
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
