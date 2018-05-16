import React, { Component, Fragment } from 'react'

import './RecentTrades.scss'

class RecentTrades extends Component {
  /*
  TODO:
  All standard is token selected in the side menu
  Get recent trades data from ethereum or our server. (I think it would be not easy...)
  We need to figure out time, price, amount.
  After getting trades data, render thoes in <li> element.
  */
  state = {
    order: {
      time: '00:00:00',
      price: '10',
      amount: '100',
    },
  }

  render() {
    return (
      <Fragment>
        <div className="RecentTrades">
         Recent Trades
        </div>
        <div className="RecentTrades__Time">
          Time
        </div>
        <div className="RecentTrades__Price">
          Price
        </div>
        <div className="RecentTrades__Amount">
          Amount
        </div>
        <div className="RecentTrades__TradesTime">
          <li>{this.state.order.time}</li>
          <li>{this.state.order.time}</li>
          <li>{this.state.order.time}</li>
          <li>{this.state.order.time}</li>
          <li>{this.state.order.time}</li>
          <li>{this.state.order.time}</li>
          <li>{this.state.order.time}</li>
          <li>{this.state.order.time}</li>
        </div>
        <div className="RecentTrades__TradesPrice">
          <li>{this.state.order.price}</li>
          <li>{this.state.order.price}</li>
          <li>{this.state.order.price}</li>
          <li>{this.state.order.price}</li>
          <li>{this.state.order.price}</li>
          <li>{this.state.order.price}</li>
          <li>{this.state.order.price}</li>
          <li>{this.state.order.price}</li>
        </div>
        <div className="RecentTrades__TradesAmount">
          <li>{this.state.order.amount}</li>
          <li>{this.state.order.amount}</li>
          <li>{this.state.order.amount}</li>
          <li>{this.state.order.amount}</li>
          <li>{this.state.order.amount}</li>
          <li>{this.state.order.amount}</li>
          <li>{this.state.order.amount}</li>
          <li>{this.state.order.amount}</li>
        </div>
      </Fragment>
    )
  }
}

export default RecentTrades
