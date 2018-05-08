import React, { Component } from 'react'

import './BuyOrder.scss'

class BuyOrder extends Component {
  /*
    TODO:
    Get orders info from server
  */
  state = {
    orders: {
      price: '100',
      currentBalance: '200',
      totalBalance: '300',
    },
  }

  render() {
    return (
      <div className="BuyOrder">
        <div className="BuyOrder__Header">
          BuyOrder
        </div>
        {/*
          TODO:
          Make loop for express <li> elements
          Make each <li> be clickable for that users can make a deal
        */}
        <div className="BuyOrder__Price">
          <li>{this.state.orders.price}</li>
          <li>{this.state.orders.price}</li>
          <li>{this.state.orders.price}</li>
          <li>{this.state.orders.price}</li>
          <li>{this.state.orders.price}</li>
          <li>{this.state.orders.price}</li>
          <li>{this.state.orders.price}</li>
          <li>{this.state.orders.price}</li>
          <li>{this.state.orders.price}</li>
        </div>
        <div className="BuyOrder__CurrentBalance">
          <li>{this.state.orders.currentBalance}</li>
          <li>{this.state.orders.currentBalance}</li>
          <li>{this.state.orders.currentBalance}</li>
          <li>{this.state.orders.currentBalance}</li>
          <li>{this.state.orders.currentBalance}</li>
          <li>{this.state.orders.currentBalance}</li>
          <li>{this.state.orders.currentBalance}</li>
          <li>{this.state.orders.currentBalance}</li>
          <li>{this.state.orders.currentBalance}</li>
        </div>
        <div className="BuyOrder__TotalBalance">
          <li>{this.state.orders.totalBalance}</li>
          <li>{this.state.orders.totalBalance}</li>
          <li>{this.state.orders.totalBalance}</li>
          <li>{this.state.orders.totalBalance}</li>
          <li>{this.state.orders.totalBalance}</li>
          <li>{this.state.orders.totalBalance}</li>
          <li>{this.state.orders.totalBalance}</li>
          <li>{this.state.orders.totalBalance}</li>
          <li>{this.state.orders.totalBalance}</li>
        </div>
      </div>
    )
  }
}

export default BuyOrder
