import {
  LOAD_TODOS,
  TODO_ADDED,
  TODO_DELETED,
  TODO_TOGGLED
} from '../constants/ActionTypes.js';

export function loadTodos(todos) {
  return { todos, type: LOAD_TODOS };
}

export function addTodo(text) {
  return { text, type: TODO_ADDED };
}

export function deleteTodo(todo) {
  return { todo, type: TODO_DELETED };
}

export function toggleTodo(todo) {
  return { todo, type: TODO_TOGGLED };
}
