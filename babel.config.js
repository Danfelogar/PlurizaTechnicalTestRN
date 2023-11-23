module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}, 'env'],
    '@babel/preset-react',
    '@babel/preset-flow',
    '@babel/preset-typescript',
  ],
};
