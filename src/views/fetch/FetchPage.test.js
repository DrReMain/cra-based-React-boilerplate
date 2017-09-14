import React from 'react';
import ReactDOM from 'react-dom';
import FetchPage from './FetchPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FetchPage/>, div);
});
