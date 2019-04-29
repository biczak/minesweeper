import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import * as actionCreators from 'Actions/gameActions';
import rootReducer from 'Reducers/rootReducer';
import initialState from 'Store/initialState';

const isDev = process.env.NODE_ENV === 'development';

const configureStore = () => {
  const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25
  });

  const middlewares = [thunkMiddleware];

  if (isDev) {
    // eslint-disable-next-line
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  const store = createStore(rootReducer, initialState(), composeEnhancers(applyMiddleware(...middlewares)));

  return store;
};

export default configureStore;
