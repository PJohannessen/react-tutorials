import React from 'react';
import ReactDOM from 'react-dom';
import ResetCss from 'reset-css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PageContainer from './layout/PageContainer';

const App = () => (
  <MuiThemeProvider>
    <PageContainer />
  </MuiThemeProvider>
);

injectTapEventPlugin();
ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
