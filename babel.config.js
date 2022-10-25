module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './app/components/index.ts',
          '@config': './app/config/index.ts',
          '@services': './app/api/index.ts',
          '@screens': './app/screens/index.ts',
          '@assets': './app/assets/index.ts',
          '@languages': './app/i18n/index.ts',
          '@navigators': './app/navigators/index.ts',
          '@utils': './app/utils/index.ts',
          '@actions': './app/redux/slices/index.ts',
        },
      },
    ],
  ],
};
