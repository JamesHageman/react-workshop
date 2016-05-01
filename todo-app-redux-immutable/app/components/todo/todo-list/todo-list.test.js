import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TodoList from "./todo-list";

describe('todo-list', () => {

  let _component;
  let _todoList;
  let _onDelete;
  let _onComplete;
  var node, html, closeButtons;

  beforeEach((done) => {
    _todoList = Immutable.fromJS([{
      "item": "test 1",
      "selected": false
    }, {
      "item": "test 2",
      "selected": true
    }]);

    _onDelete = expect.createSpy();
    _onComplete = expect.createSpy();

    _component = TestUtils.renderIntoDocument(
      <TodoList todos={_todoList} onDelete={_onDelete} onComplete={_onComplete} /> );

    ReactDOM.render(
      <TodoList todos={_todoList} onDelete={_onDelete} onComplete={_onComplete} />,
      document.body, function() {
        node = ReactDOM.findDOMNode(this);
        html = node.innerHTML;
        closeButtons = node.querySelectorAll('li button');
        done();
      }
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document.body);
  });

  it('renders with two todos', () => {
    expect(_component).toExist();
    expect(_component.props.todos.get(0).get('item')).toEqual('test 1');
    expect(_component.props.todos.get(1).get('item')).toEqual('test 2');

    expect(!!html.match(/test 1/)).toBe(true);
    expect(!!html.match(/test 2/)).toBe(true);
  });

  it('calls onDelete with the right todo and a click event', () => {
    var buttons = node.querySelectorAll('button');
    TestUtils.Simulate.click(buttons[0]);
    var firstTodo = _todoList.get(0);
    var secondTodo = _todoList.get(1);
    console.log(_onDelete.calls);
    expect(_onDelete.calls.length).toEqual(1);
    expect(_onDelete.calls[0].arguments[0]).toBe(firstTodo);
    expect(_onDelete.calls[0].arguments[1].target).toBe(buttons[0]);

    TestUtils.Simulate.click(buttons[1]);
    expect(_onDelete.calls.length).toEqual(2);
    expect(_onDelete.calls[1].arguments[0]).toBe(secondTodo);
    expect(_onDelete.calls[1].arguments[1].target).toBe(buttons[1]);
  });

  it('calls onComplete with the right todo', () => {
    var labels = node.querySelectorAll('label');
    TestUtils.Simulate.click(labels[1]);
    expect(_onComplete.calls.length).toEqual(1);
    expect(_onComplete.calls[0].arguments[0]).toBe(_todoList.get(1));
  });

  describe('todo-list with empty todo list', () => {

    beforeEach((done) => {
      _todoList = Immutable.fromJS([]);

      ReactDOM.render(<TodoList todos={_todoList} onDelete={_onDelete} onComplete={_onComplete} />, document.body, function () {
        node = ReactDOM.findDOMNode(this);
        html = node.innerHTML;
        done();
      });
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(document.body);
    });

    it('should render "Nothing Here!" when no todos', () => {
      expect(html).toEqual('Nothing Here!');
    });
  });

});
