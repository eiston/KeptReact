/* eslint-disable prettier/prettier */
import React from "react";

import { Provider } from 'react-redux';

import Home from './src/Home';
import store from './src/store/store';

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
