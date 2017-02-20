import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.add(this.state.value);
    this.setState({ value: '' });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">
          <TextField
            hintText="Add a new To Do"
            name="todo"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label><br />
        <RaisedButton label="Submit" type="submit" />
      </form>
    );
  }
}

AddToDoForm.propTypes = {
  add: React.PropTypes.func.isRequired,
};

export default AddToDoForm;
