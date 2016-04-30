import React from 'react';
import TodoList from './todo-list/todo-list';
import TodoForm from './todo-form/todo-form';

export default class Todo extends React.Component {

  render() {

    return (
      <div className='app'>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}
