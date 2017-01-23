import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

it('fails when no name is supplied', () => {
  const div = document.createElement('div');
  const stub = sinon.stub(console, 'error');
  ReactDOM.render(<Hello />, div);
  expect(stub.calledOnce).toBe(true);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello name="tester" />, div);
});
