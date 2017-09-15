import React from 'react'

import { Link } from 'react-router'

import classNames from 'classnames'
import './NavBar.less'

export default class NavBar extends React.Component {

  render() {
    const { prefixCls = 'R', className } = this.props;
    const classs = classNames(className, {
      [`${prefixCls}-NavBar`]: true
    });


    return (
      <nav className={classs}>
        <ul>
          <li><Link activeClassName="active" to="/">Home</Link></li>
          <li><Link activeClassName="active" to="/counter">Counter</Link></li>
          <li><Link activeClassName="active" to="/fetch">Fetch</Link></li>
          <li><Link activeClassName="active" to="/404">404</Link></li>
        </ul>
      </nav>
    )
  }
}