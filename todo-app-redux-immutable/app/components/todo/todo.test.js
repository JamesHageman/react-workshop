import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Todo from "./todo";
import configureStore from '../../store/configure-store.js';

describe('todo', () => {
  var _component
  var _store

  beforeEach(() => {
    // since <Todo/> is a connected component, we must pass it a store or wrap
    // it in a <Provider/>
    _store = configureStore();
    _component = TestUtils.renderIntoDocument( <Todo store={_store} /> );
  });

  it('renders without problems', () => {
    expect(_component).toExist();
  });

  it('TODO: I will write some tests');

});
