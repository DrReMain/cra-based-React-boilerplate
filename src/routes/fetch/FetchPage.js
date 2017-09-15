import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from '../../components/NavBar'

import style from './FetchPage.css'

class FetchPage extends Component {

  render() {
    const { data, dispatch } = this.props;
    let content;

    if (data.success) {
      console.log(data.data[ 0 ]);
      content = (
        <ol className={style.ul}>
          {data.data.map(item => {
            return (
              <li key={item.id}><a href={item.author.avatar_url}>{item.title}</a></li>
            )
          })}
        </ol>
      )
    } else {
      content = data
    }

    return (
      <div className="App">
        <NavBar/>
        <main>
          <div className={style.fetch} onClick={() => dispatch({ type: 'FETCH_ASYNC' })}>FETCH</div>
          <div className={style.clean} onClick={() => dispatch({ type: 'CLEAN' })}>CLEAN</div>
          <div className={style.fetch} onClick={() => this.props.router.push('/list')}>LIST</div>

          <article className={style.article}>
            {content}
          </article>
        </main>
      </div>
    );
  }
}

export default connect(
  ({ fetch }) => ({ data: fetch.data })
)(FetchPage);