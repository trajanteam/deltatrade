import React, { Component } from 'react'

import './SellOrder.scss'

class SellOrder extends Component {
  /*
    TODO:
    Get order info from server
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
      <div className="SellOrder">
        <div className="SellOrder__Header">
          SellOrder
        </div>
        {/*
          TODO:
          Make each <li> be clickable for that users can make a deal
        */}
        <div className="SellOrder__Price">
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
        <div className="SellOrder__CurrentBalance">
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
        <div className="SellOrder__TotalBalance">
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

export default SellOrder
