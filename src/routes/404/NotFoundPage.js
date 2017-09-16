import React, { Component } from 'react';

import style from './NotFoundPage.css'

class NotFoundPage extends Component {
  render() {
    return (
      <main>
        <h1 className={style.notfound}>404</h1>
      </main>
    );
  }
}

export default NotFoundPage;
