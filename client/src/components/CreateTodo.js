import React from 'react';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    };
  }

  onChangeDescription = e => {
    this.setState({
      todo_description: e.target.value
    });
  };

  onChangeResponsible = e => {
    this.setState({
      todo_responsible: e.target.value
    });
  };

  onChangePriority = e => {
    this.setState({
      todo_priority: e.target.value
    });
  };

  render() {
    return (
      <div>
        <p>Create Todo</p>
      </div>
    );
  }
}

export default CreateTodo;
