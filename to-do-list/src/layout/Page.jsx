import React from 'react';
import Paper from 'material-ui/Paper';
import { LARGE } from 'material-ui/utils/withWidth';
import AddToDoForm from '../AddToDoForm';
import AppLeftNav from './AppLeftNav';
import PrimaryToolbar from './PrimaryToolbar';
import Items from '../Items';

const Page = ({ addToDo, navIconTouched, todos, isDrawerOpened, width }) => {
  const containerStyle = {
    margin: '20px',
  };

  if (width === LARGE) {
    containerStyle.paddingLeft = '256px';
  }

  return (
    <div className="page">
      <PrimaryToolbar
        navIconTouched={navIconTouched}
        width={width}
        isDrawerOpened={isDrawerOpened}
      />
      <div style={containerStyle}>
        <p>You have {todos.length} item(s) remaining.</p>
        <Items todos={todos} />
        <AddToDoForm add={addToDo} />
      </div>
      <AppLeftNav
        isDrawerOpened={isDrawerOpened}
        width={width}
      />
    </div>
  );
};

Page.propTypes = {
  addToDo: React.PropTypes.func.isRequired,
  navIconTouched: React.PropTypes.func.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  isDrawerOpened: React.PropTypes.bool.isRequired,
  width: React.PropTypes.number.isRequired,
};

export default Page;
