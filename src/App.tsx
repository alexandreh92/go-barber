import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';

import '~/styles/fonts.css';
import GlobalStyle from '~/styles/global';

import history from './services/history';

import Routes from './routes';
import HistoryRouter from './routes/HistoryRouter';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HistoryRouter history={history}>
        <GlobalStyle />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        <Routes />
      </HistoryRouter>
    </PersistGate>
  </Provider>
);

export default App;
