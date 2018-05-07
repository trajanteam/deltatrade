import React, { Component } from 'react'

import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="Market__Header">
        <div className="Market__Header--Price">
          Price
        </div>
        <div className="Market__Header--CurrentBalance">
          Current Balance
        </div>
        <div className="Market__Header--TotalBalance">
          Total Balance
        </div>
      </div>
    )
  }
}
