import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo/todo';
import './components/todo/todo.scss';

import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { Provider } from 'react-redux'
import { loadTodos } from './actions/TodoActions.js';

const store = createStore(rootReducer);
const mountNode = document.getElementById('app');

store.dispatch(loadTodos([{
  item: 'Learn React',
  selected: false
}, {
  item: 'Learn Flux',
  selected: false
}]));

ReactDOM.render(
  <Provider store={store}>
    <Todo/>
  </Provider>,
  mountNode
);
