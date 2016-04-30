import {
  LOAD_TODOS,
  TODO_ADDED,
  TODO_DELETED,
  TODO_TOGGLED
} from '../constants/ActionTypes.js';

import { fromJS } from 'immutable';

const initialState = fromJS([]);

export default function todos(state = initialState, action) {
  switch (action.type) {

    case LOAD_TODOS:
      return fromJS(action.todos);

    case TODO_ADDED:
      return state.push(fromJS({
        item: action.text,
        selected: false
      }));

    case TODO_DELETED:
      return state.filter(todo => todo !== action.todo);

    case TODO_TOGGLED:
      return state.map(todo => {
        if (todo !== action.todo) {
          return todo;
        }

        return todo.update('selected', s => !s);
      })

    default:
      return state;
  }
}
