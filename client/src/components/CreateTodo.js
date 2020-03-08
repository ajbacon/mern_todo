import React from 'react';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: 'Medium',
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

  onSubmit = e => {
    e.preventDefault();

    console.log('form submitted');
    console.log(`description: ${this.state.todo_description}`);
    console.log(`responsible: ${this.state.todo_responsible}`);
    console.log(`priority: ${this.state.todo_priority}`);

    this.setState({
      todo_description: '',
      todo_responsible: '',
      todo_priority: 'Medium',
      todo_completed: false
    });
  };

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Description: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.todo_description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className='form-group'>
            <label>Responsible: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.todo_responsible}
              onChange={this.onChangeResponsible}
            />
          </div>
          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input
                type='radio'
                name='priorityOptions'
                id='priorityLow'
                value='Low'
                checked={this.state.todo_priority === 'Low'}
                onChange={this.onChangePriority}
              />
              <label className='form-check-label'>Low</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                type='radio'
                name='priorityOptions'
                id='priorityMedium'
                value='Medium'
                checked={this.state.todo_priority === 'Medium'}
                onChange={this.onChangePriority}
              />
              <label className='form-check-label'>Medium</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                type='radio'
                name='priorityOptions'
                id='priorityHigh'
                value='High'
                checked={this.state.todo_priority === 'High'}
                onChange={this.onChangePriority}
              />
              <label className='form-check-label'>High</label>
            </div>
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Create Todo'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
