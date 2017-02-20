import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { List, ListItem } from 'material-ui/List';

class Items extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos.map(item =>
      <ListItem key={item} leftCheckbox={<Checkbox />}>{item}</ListItem>,
    );
    return (
      <List>{todos}</List>
    );
  }
}

Items.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default Items;
