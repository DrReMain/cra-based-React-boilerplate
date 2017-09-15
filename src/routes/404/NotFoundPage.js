import React, { Component } from 'react';

import NavBar from '../../components/NavBar'

import style from './NotFoundPage.css'

class NotFoundPage extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <main>
          <h1 className={style.notfound}>404</h1>
        </main>
      </div>
    );
  }
}

export default NotFoundPage;
