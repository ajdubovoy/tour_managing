import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { reducer as formReducer } from 'redux-form';
import { ThemeProvider } from 'styled-components';

import primaryTheme from './themes/primary_theme';

import App from './components/app';


const reducers = combineReducers(
  {
    form: formReducer
  }
);

const middlewares = applyMiddleware(logger, ReduxPromise);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(middlewares)
);

const container = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={primaryTheme}>
        <App>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </App>
      </ThemeProvider>
    </Router>
  </Provider>,
  container
);
