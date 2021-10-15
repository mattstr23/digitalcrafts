import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);