import React from 'react';
import { List } from 'immutable';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: React.PropTypes.instanceOf(List).isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onComplete: React.PropTypes.func.isRequired
  }

  render() {
    var { todos, onDelete, onComplete } = this.props;

    var rows = todos.map((todo, index) => {
      return (
        <li key={index}>
          <button onClick={onDelete.bind(null, todo)}>X</button>
          <label
            className={
              todo.get('selected') ?
                'todo-item--is-completed' :
                'todo-item'
            }
            onClick={onComplete.bind(null, todo)}>
            {todo.get('item')}
          </label>
        </li>
      );
    });

    if (todos.size <= 0) {
      return (<h3>Nothing Here!</h3>);
    }

    return (
      <div>
        <ul className='todo-list'>{rows}</ul>
      </div>
    );
  }
}
