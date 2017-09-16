import React, { Component } from 'react';
import { connect } from 'react-redux'
import style from './DetailPage.css'

class DetailPage extends Component {

  componentWillMount() {
    this.props.dispatch({ type: 'FETCH_DETAIL', payload: this.props.params.id });
  }

  render() {

    const { detail } = this.props;
    console.log(detail);
    if (detail) {
      return (
        <main>
          <h1 className={style.title}>{detail.title}</h1>
          <div className={style.desc}>
            <img src={detail.author.avatar_url} alt=""/>
            <span>作者： {detail.author.loginname}</span>
            <span>发布时间：{detail[ 'create_at' ]}</span>
          </div>
          <article className={style.article} dangerouslySetInnerHTML={{ __html: detail.content }}/>

          <section className={style.comments}>
            {detail.replies.map(reply => (
              <div key={reply.id}>
                <div className={style.desc2}>
                  <img src={reply.author.avatar_url} alt=""/>
                  <span>用户：{reply.author.loginname}</span>
                  <span>{reply.create_at}</span>
                </div>
                <div className={style.comment} dangerouslySetInnerHTML={{ __html: reply.content }}></div>
              </div>
            ))}
          </section>
        </main>
      );
    }
    return (
      <h1>no content</h1>
    )
  }
}

export default connect(
  ({ fetch }) => ({ detail: fetch.detail })
)(DetailPage);
