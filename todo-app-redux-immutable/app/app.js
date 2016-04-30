import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo/todo';
import './components/todo/todo.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { loadTodos } from './actions/TodoActions.js';
import configureStore from './store/configure-store.js';

const store = configureStore();
const mountNode = document.getElementById('app');

store.dispatch(loadTodos([{
  item: 'Learn React',
  selected: false
}, {
  item: 'Learn Flux',
  selected: false
}, {
  item: 'Learn Redux',
  selected: false
}, {
  item: 'Learn Immutable.js',
  selected: false
}]));

ReactDOM.render(
  <Provider store={store}>
    <Todo/>
  </Provider>,
  mountNode
);
