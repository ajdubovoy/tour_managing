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

import contactsReducer from './reducers/contacts_reducer'
import contactReducer from './reducers/contact_reducer'

import App from './components/app';
import ContactsIndex from './components/contacts_index';


const reducers = combineReducers(
  {
    form: formReducer,
    contacts: contactsReducer,
    contact: contactReducer
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
            <Route exact path="/tours" component={App} />
            <Route exact path="/venues" component={App} />
            <Route exact path="/contacts" component={ContactsIndex} />
            <Redirect exact from="/" to='/contacts' />
          </Switch>
        </App>
      </ThemeProvider>
    </Router>
  </Provider>,
  container
);
