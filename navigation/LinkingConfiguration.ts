/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {getStateFromPath} from '@react-navigation/core';
import * as Linking from 'expo-linking';
// console.log(Linking.makeUrl('/'));

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      Login: 'Login',
      NotFound: '*',
    },
  },
  getStateFromPath: (path: string, options: any) => {
    if (path.startsWith('expo-auth-session'))
      return getStateFromPath('Login', options);
    else return getStateFromPath(path, options);
    // Return a state object here
    // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`
  },
};
