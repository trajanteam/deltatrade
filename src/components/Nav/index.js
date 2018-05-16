import React, { Component } from 'react'

import './index.scss'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import Login from './Login'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Deposit />
        <Withdraw />
        <Login />
      </div>
    )
  }
}

export default Nav
