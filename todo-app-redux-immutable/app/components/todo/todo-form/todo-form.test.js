import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect, { createSpy } from 'expect';
import TodoForm from "./todo-form";

describe('todo-form', () => {
  var _component
  var _handleSave

  beforeEach(() => {
    _handleSave = createSpy();
    _component = TestUtils.renderIntoDocument( <TodoForm onSave={_handleSave} /> );
  })
  it('renders without problems', () => {
    expect(_component).toExist();
  })
  it('TODO: I will write some tests');
});

