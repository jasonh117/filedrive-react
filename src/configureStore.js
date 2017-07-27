import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducer';

const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    autoRehydrate()
  )
);

const config = {
  blacklist: ['modal', 'file']
}

persistStore(store, config);

export default store;