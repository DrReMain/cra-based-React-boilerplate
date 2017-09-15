import React, { Component } from 'react';
import style from './ListPage.css'

import NavBar from '../../components/NavBar'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <NavBar/>
        <main>
          list
        </main>
      </div>
    );
  }
}

export default App;
