import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/todos')
      .then(res => this.setState({ todo: res.data }))
      .catch(err => {
        console.log(err);
      });
  }

  todoList = () => {
    return this.state.todos.map((todo, i) => {
      return <Todo todo={todo} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
