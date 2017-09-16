import React from 'react';
import { render } from 'react-dom';
import AppRouter from './routes'
import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/main.less';

// Render Setup
// ---------------------------------------
const MOUNT_NODE = document.getElementById('root');

let renderFunc = () => {
  render(
    <Provider store={store}>
      <AppRouter/>
    </Provider>,
    MOUNT_NODE
  );
};

if (process.env.NODE_ENV !== 'test') renderFunc();

