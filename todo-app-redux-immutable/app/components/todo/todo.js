import React from 'react';
import TodoList from './todo-list/todo-list';
import TodoForm from './todo-form/todo-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'immutable';
import {
  addTodo,
  deleteTodo,
  toggleTodo
} from '../../actions/TodoActions.js';

class Todo extends React.Component {
  static propTypes = {
    todos: React.PropTypes.instanceOf(List),
    addTodo: React.PropTypes.func.isRequired,
    deleteTodo: React.PropTypes.func.isRequired,
    toggleTodo: React.PropTypes.func.isRequired
  }

  handleTodoDelete = (todo) => {
    this.props.deleteTodo(todo);
  }

  handleTodoComplete = (todo) => {
    this.props.toggleTodo(todo);
  }

  handleTodoSave = (text) => {
    this.props.addTodo(text);
  }

  render() {

    return (
      <div className='app'>
        <TodoList
          todos={this.props.todos}
          onDelete={this.handleTodoDelete}
          onComplete={this.handleTodoComplete}/>
        <TodoForm onSave={this.handleTodoSave} />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      todos: state.todos
    }
  },
  dispatch => bindActionCreators({
    addTodo,
    deleteTodo,
    toggleTodo
  }, dispatch)
)(Todo);
