# Mobile Development

A monorepo of mobile projects built with React Native / Expo. Each top-level directory is a standalone project.

## Projects

| Directory | Description | Stack |
|-----------|-------------|-------|
| [MyTodoList](./MyTodoList) | A simple Todo List app | Expo, React Native, JavaScript |

## Getting Started

Each project is self-contained. Navigate into the project folder and follow its own setup steps:

```bash
cd <project-name>
npm install
npx expo start
```

Scan the QR code with **Expo Go** (Android/iOS) or press `a` for Android emulator / `i` for iOS simulator.

## Structure

```
Mobile_Development/
├── MyTodoList/          # Todo List app (Expo + React Native)
└── ...                  # Future projects
```

## Changelog

### 2026-02-28
- Initialized repository
- Added `MyTodoList` project
- Removed unused Expo starter template boilerplate (components, hooks, constants, scripts)
- Fixed `tsconfig.json` to support JavaScript files
