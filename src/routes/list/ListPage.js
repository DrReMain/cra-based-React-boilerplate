import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import style from './ListPage.css'

class ListPage extends Component {

  componentWillMount() {
    this.props.dispatch({ type: 'FETCH_ASYNC' });
  }

  render() {

    const { data } = this.props;
    const lists = data.data || [];

    if (this.props.children) {
      return this.props.children
    }

    return (
      <main>
        <ol className={style.ol}>
          {lists.map(item => <li key={item.id}><Link to={`list/${item.id}`}>{item.title}</Link></li>)}
        </ol>
      </main>
    );
  }
}

export default connect(
  ({ fetch }) => ({ data: fetch.data })
)(ListPage);
