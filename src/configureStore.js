import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducer';

const loggerMiddleware = createLogger();

export default (preloadedState) => createStore(
  reducers, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware)
);