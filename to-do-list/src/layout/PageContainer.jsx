import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Page from './Page';


class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isDrawerOpened: false,
    };

    this.addToDo = this.addToDo.bind(this);
    this.toggleLeftNav = this.toggleLeftNav.bind(this);
  }

  addToDo(value) {
    this.setState({ todos: this.state.todos.concat(value) });
  }

  toggleLeftNav() {
    this.setState({ isDrawerOpened: !this.state.isDrawerOpened });
  }

  render() {
    return (
      <Page
        addToDo={this.addToDo}
        navIconTouched={this.toggleLeftNav}
        isDrawerOpened={this.state.isDrawerOpened}
        todos={this.state.todos}
        width={this.props.width}
      />
    );
  }
}

PageContainer.propTypes = {
  width: React.PropTypes.number.isRequired,
};

export default withWidth()(PageContainer);
