import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Todo from "./todo";

describe('todo', () => {
  var _component

  beforeEach(() => {
    _component = TestUtils.renderIntoDocument( <Todo /> );
  });

  it('renders without problems', () => {
    expect(_component).toExist();
  });

  it('TODO: I will write some tests');

});
