module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@screens': './screens',
            '@hooks': './hooks',
            '@components': './components',
            '@actions': './redux/action',
            '@configs': './config',
            '@helpers': './helper',
            '@constants': './constants',
            '@appTypes': './types',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
