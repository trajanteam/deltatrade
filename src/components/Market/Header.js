import React, { Component } from 'react'

import './Header.scss'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__Price">
          Price
        </div>
        <div className="Header__CurrentBalance">
          Current Balance
        </div>
        <div className="Header__TotalBalance">
          Total Balance
        </div>
      </div>
    )
  }
}

export default  Header
