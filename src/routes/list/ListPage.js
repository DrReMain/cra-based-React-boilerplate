import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import style from './ListPage.css'

import NavBar from '../../components/NavBar'

class ListPage extends Component {

  componentWillMount() {
    this.props.dispatch({ type: 'FETCH_ASYNC' });
  }

  render() {

    const { data } = this.props;
    const lists = data.data || [];
    return (
      <div className={style.App}>
        <NavBar/>
        <main>
          <ol className={style.ol}>
            {lists.map(item => <li key={item.id}><Link to={`list/${item.id}`}>{item.title}</Link></li>)}
          </ol>
        </main>
      </div>
    );
  }
}

export default connect(
  ({ fetch }) => ({ data: fetch.data })
)(ListPage);
