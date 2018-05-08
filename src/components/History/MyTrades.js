import React, { Component, Fragment } from 'react'

import './MyTrades.scss'

class MyTrades extends Component {
  /*
  TODO:
  Get pendingOrders & completedOrders from server or Ethereum.
  may need to set order data as list[] easy to use.
  */
  state = {
    pending: true,
    completed: false,
    pendingOrders: {
      tokenType: 'MKR',
      price: '10',
      amount: '100',
    },
    completedOrders: {
      tokenType: 'ETH',
      price: '20',
      amount: '200',
    },
  }

  onClickPendingTab = () => {
    this.setState({
      pending: true,
      completed: false,
    })
  }

  onClickCompletedTab = () => {
    this.setState({
      pending: false,
      completed: true,
    })
  }

  renderTypeItems = () => {
    if (this.state.pending === true) {
      return (
        `${this.state.pendingOrders.tokenType}`
      )
    }
    return (
      `${this.state.completedOrders.tokenType}`
    )
  }

  renderPriceItems = () => {
    if (this.state.pending === true) {
      return (
        `${this.state.pendingOrders.price}`
      )
    }
    return (
      `${this.state.completedOrders.price}`
    )
  }

  renderAmountItems = () => {
    if (this.state.pending === true) {
      return (
        `${this.state.pendingOrders.amount}`
      )
    }
    return (
      `${this.state.completedOrders.amount}`
    )
  }

  render() {
    const pendingOrders = 'pendingOrders'
    let items = [this.state.pendingOrders.tokenType]

    return (
      <Fragment>
        <div className="MyTrades__Header">
          MyTrades
        </div>
        <div
          className={`MyTrades__Pending--${this.state.pending}`}
          onClick={this.onClickPendingTab}
        >
          Pending
        </div>
        <div
          className={`MyTrades__Completed--${this.state.completed}`}
          onClick={this.onClickCompletedTab}
        >
          Completed
        </div>
        <div className="MyTrades__TabItem">
          <div className="TabItem__TokenType">
            Type
          </div>
          <div className="TabItem__Price">
            Price
          </div>
          <div className="TabItem__Amount">
            Amount
          </div>
        </div>
        <div className="MyTrades__TypeItems">
          {this.renderTypeItems()}
        </div>
        <div className="MyTrades__PriceItems">
          {this.renderPriceItems()}
        </div>
        <div className="MyTrades__AmountItems">
          {this.renderAmountItems()}
        </div>
      </Fragment>
    )
  }
}

export default MyTrades
