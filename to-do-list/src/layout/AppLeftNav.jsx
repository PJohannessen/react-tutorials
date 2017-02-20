import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { LARGE } from 'material-ui/utils/withWidth';

const AppLeftNav = ({ width, isDrawerOpened }) => {
  const titleStyle = {
    display: 'block',
    lineHeight: '64px',
    backgroundColor: 'rgb(0, 188, 212)',
    paddingLeft: '24px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '24px',
  };

  return (
    <Drawer
      docked={width === LARGE}
      open={width === LARGE || isDrawerOpened}
      zDepth={1}
    >
      <a style={titleStyle} href="#"><h1>To Do List!</h1></a>
      <MenuItem>Home</MenuItem>
    </Drawer>
  );
};

AppLeftNav.propTypes = {
  isDrawerOpened: React.PropTypes.bool.isRequired,
  width: React.PropTypes.number.isRequired,
};

export default AppLeftNav;
