import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from '../../components/NavBar'

import style from './CounterPage.css'

class CounterPage extends Component {
  render() {

    const { value, dispatch } = this.props;

    return (
      <div className="App">
        <NavBar/>
        <main>
          <h1 className={style.value}>{value}</h1>
          <p className={style.btns}>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: '+1' })}>ADD</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>MINUS</button>
            <button onClick={() => dispatch({ type: 'INCREMENT_IF_ODD' })}>ADD IF ODD</button>
            <button onClick={() => dispatch({ type: 'INCREMENT_ASYNC', payload: '1秒后+1' })}>ADD ASYNC</button>
          </p>
        </main>
      </div>
    );
  }
}

export default connect(
  ({ counter }) => ({ value: counter }),
)(CounterPage);
