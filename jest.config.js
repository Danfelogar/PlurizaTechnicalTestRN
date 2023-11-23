module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  // transformIgnorePatterns: [
  //   'node_modules/(?!((jest-)?react-native|react-native-elements|@react-native(-community)?)/)',
  // ],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons))',
  ],
};
