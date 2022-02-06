/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';

import '~/styles/fonts.css';
import GlobalStyle from '~/styles/global';

import history from './services/history';

import Routes from './routes';

import Foo from './Foo';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          getState={(state) => state.toastr}
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        {/* <Routes /> */}
        <Foo />
      </PersistGate>
    </Provider>
  );
}

export default App;
