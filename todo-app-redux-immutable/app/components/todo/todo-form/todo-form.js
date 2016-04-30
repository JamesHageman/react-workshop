import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoForm extends React.Component {

  static propTypes = {
    onSave: React.PropTypes.func.isRequired
  }

  render() {
    var props = {
      ref: 'newTodo',
      type: 'text',
      placeholder: 'New todo'
    };

    return (
      <div>
        <input {...props} onKeyDown={this.handleEnterKey}/>
        <button onClick={this.saveTodo}>Add</button>
      </div>
    );
  }

  handleEnterKey = (event) => {
    if (event.keyCode === 13) {
      this.saveTodo();
    }
  }

  saveTodo = () => {
    var { newTodo } = this.refs;
    var { onSave } = this.props;
    var value = ReactDOM.findDOMNode(newTodo).value;

    if (!value) {
      return;
    }

    ReactDOM.findDOMNode(newTodo).value = null;
    onSave(value);
  }
}
