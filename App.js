/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import { Provider } from 'react-redux';

import Home from './src/Home';
import store from './src/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );

  }
}

export default App;
