import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import style from './App.css';
import NavBar from '../../components/NavBar'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <NavBar/>
        {
          this.props.children
            ? this.props.children
            : (<main className={style.main}>
              <div className={style.AppHeader}>
                <img src={logo} className={style.AppLogo} alt="logo"/>
                <h2>Welcome to React</h2>
              </div>
              <p className={style.AppIntro}>
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </main>)
        }
      </div>
    );
  }
}

export default App;
