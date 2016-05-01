import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import expect, { createSpy } from 'expect';
import TodoForm from "./todo-form";

describe('todo-form', () => {
  var _component
  var _handleSave
  var node

  beforeEach(() => {
    _handleSave = createSpy();
    _component = TestUtils.renderIntoDocument( <TodoForm onSave={_handleSave} /> );
    ReactDOM.render(<TodoForm onSave={_handleSave} />, document.body, function() {
      node = ReactDOM.findDOMNode(this);
    });
  });

  it('renders without problems', () => {
    expect(_component).toExist();
  });

  it('calls save with the entered text and clears the text', () => {
    var input = node.querySelector('input');

    input.value = 'Write some tests';

    TestUtils.Simulate.change(input);
    TestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});

    expect(_handleSave.calls.length).toEqual(1);
    expect(_handleSave.calls[0].arguments[0]).toEqual('Write some tests');

    expect(input.value).toEqual('');

  });

  it('does not call save if no text is entered', () => {
    var input = node.querySelector('input');

    input.value = '';

    TestUtils.Simulate.change(input);
    TestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});

    expect(_handleSave.calls.length).toEqual(0);
  })
});

