import todos from './todos.js';
import { List, fromJS } from 'immutable';
import expect from 'expect';
import {
  loadTodos,
  addTodo,
  deleteTodo,
  toggleTodo
} from '../actions/TodoActions.js';

describe('todo reducer', () => {
  var _todoList;

  beforeEach(() => {
    _todoList = fromJS([{
      item: 'item 1',
      selected: false
    }, {
      item: 'item 2',
      selected: true
    }]);
  })

  it('defaults to an empty List', () => {
    expect(todos(undefined, {}).equals(List())).toBe(true);
  })

  it('loads a new todoList', () => {
    expect(todos(undefined, loadTodos(_todoList))).toEqual(_todoList);

    var _firstList = fromJS([{
      item: 'item 0',
      selected: false
    }]);

    expect(todos(_firstList, loadTodos(_todoList))).toEqual(_todoList);
  })

  it('adds a todo to the end', () => {
    var _nextState = todos(_todoList, addTodo('item 3'));
    expect(_nextState.toJS()).toEqual([{
      item: 'item 1',
      selected: false
    }, {
      item: 'item 2',
      selected: true
    }, {
      item: 'item 3',
      selected: false
    }]);
  })

  it('removes a todo', () => {
    var _nextState = todos(_todoList, deleteTodo(_todoList.get(1)));
    expect(_nextState.toJS()).toEqual([{
      item: 'item 1',
      selected: false
    }]);
  })

  it('toggles a todo', () => {
    var _nextState = todos(_todoList, toggleTodo(_todoList.get(1)));
    expect(_nextState.toJS()).toEqual([{
      item: 'item 1',
      selected: false
    }, {
      item: 'item 2',
      selected: false
    }]);

    _nextState = todos(_nextState, toggleTodo(_todoList.get(0)));
    expect(_nextState.toJS()).toEqual([{
      item: 'item 1',
      selected: true
    }, {
      item: 'item 2',
      selected: false
    }]);
  })
});
