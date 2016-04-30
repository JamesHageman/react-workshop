import { createStore } from 'redux';
import rootReducer from '../reducers/index.js';

export default function configureStore() {
  return createStore(rootReducer);
}
