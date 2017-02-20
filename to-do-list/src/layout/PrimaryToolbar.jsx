import React from 'react';
import AppBar from 'material-ui/AppBar';
import { LARGE } from 'material-ui/utils/withWidth';

const PrimaryToolbar = ({ navIconTouched, width }) => {
  const appBarStyle = {
  };

  if (width === LARGE) {
    appBarStyle.paddingLeft = '256px';
  }

  const titleStyle = {
    textAlign: 'center',
  };

  return (
    <AppBar
      style={appBarStyle}
      title="Home"
      titleStyle={titleStyle}
      onLeftIconButtonTouchTap={navIconTouched}
      showMenuIconButton={width !== LARGE}
    />
  );
};

PrimaryToolbar.propTypes = {
  navIconTouched: React.PropTypes.func.isRequired,
  width: React.PropTypes.number.isRequired,
};

export default PrimaryToolbar;
