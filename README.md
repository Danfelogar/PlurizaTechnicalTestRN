# React Native TVMaze App

This is a React Native application to display information about cryptocurrencies and their value in dollars. Data is obtained from [public s3 bucket API](https://pluriza.s3.us-east-1.amazonaws.com/response.json).

### Setup Environment

Project created with React Native CLI.[ See official docs](https://reactnative.dev/docs/environment-setup) to set up the environment.

### Run

**Install dependencies**

```
yarn
```

**Install IOS Pods**

```
cd ios && pod install
```

**Run IOS**

```
yarn ios
```

**Run Android**

```
yarn android
```

### 🛠 Tech and Libraries

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/): Routing and navigation
- [Redux Toolkit](https://redux-toolkit.js.org/Í): Data storage efficient Redux
- [Axios](https://github.com/axios/axios): Promise based HTTP client

### App Screenshots

|                 |                   Android                    |                   IOS                    |
| :-------------: | :------------------------------------------: | :--------------------------------------: |
|   Home Screen   |   ![](src/assets/Screenshot_android_1.png)   |   ![](src/assets/Screenshot_ios_1.png)   |
| Details Screen  | ![](src/assets/Screenshot_android_2.png)     | ![](src/assets/Screenshot_ios_2.png)     |
| Details Results |  ![](src/assets/Screenshot_android_3.png)    |  ![](src/assets/Screenshot_ios_3.png)    |
