import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index.js';

export default function configureStore(initialState) {
  const middleware = [];
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window && window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
