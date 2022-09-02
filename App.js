import * as React from 'react';
import {Provider} from 'react-redux';
// import FlashMessage from 'react-native-flash-message';
import store from './store';
import Router from './src/router';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
      {/* <FlashMessage position="top" /> */}
    </>
  );
}

export default App;
