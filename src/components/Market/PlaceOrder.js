import React, { Component, Fragment } from 'react'

import './PlaceOrder.scss'

class PlaceOrder extends Component {
  /*
    TODO:
    control states using Redux
  */
  state = {
    buyTab: 'Activated',
    sellTab: 'Deactivated',
    button: 'Buy',
    tokenType: 'MKR',
    priceType: 'MKR/ETH',
    paymentType: 'ETH',
    amount: '',
    price: '',
    expires: '',
  }

  onClickBuyTab = () => {
    this.setState({
      buyTab: 'Activated',
      sellTab: 'Deactivated',
      button: 'Buy',
    })
  }

  onClickSellTab = () => {
    this.setState({
      buyTab: 'Deactivated',
      sellTab: 'Activated',
      button: 'Sell',
    })
  }

  /*
    TODO:
    make onInput Callback function to set state on each <input>
  */
  onAmountInputChange = () => {

  }

  render() {
    return (
      <Fragment>
        <div className="PlaceOrder__Header">
          Place Order!
        </div>
        <div className="PlaceOrder__OrderType">
          <div
            className={`PlaceOrder__Tab--${this.state.buyTab}`}
            onClick={this.onClickBuyTab}
          >
            Buy
          </div>
          <div
            className={`PlaceOrder__Tab--${this.state.sellTab}`}
            onClick={this.onClickSellTab}
          >
            Sell
          </div>
        </div>
        <div className="PlaceOrder__OrderForm">
          <htmlForm>
            <label
              htmlFor="tokenType"
              className="PlaceOrder__Left"
            >
              {this.state.tokenType}
            </label>
            <input
              id="tokenType"
              placeholder="Amount to trade"
              className="PlaceOrder__right"
              value={this.state.amount}
            />

            <label
              htmlFor="price"
              className="PlaceOrder__Left"
            >
              {this.state.priceType}
            </label>
            <input
              id="price"
              placeholder="Price per token"
              className="PlaceOrder__right"
              value={this.state.price}
            />

            <label
              htmlFor="totalPrice"
              className="PlaceOrder__Left"
            >
              {this.state.paymentType}
            </label>
            <input
              id="totalPrice"
              placeholder="Total Price"
              className="PlaceOrder__right"
              value={this.state.amount * this.state.price}
            />

            <label
              htmlFor="expires"
              className="PlaceOrder__Left"
            >
              {this.state.tokenType}
            </label>
            <input
              id="expires"
              placeholder="numberOfBlocks"
              className="PlaceOrder__right"
              value={this.state.expires}
            />
          <div className="PlaceOrder__Left" />
            <button
              className="PlaceOrder__button"
            >
              {this.state.button}
            </button>
          </htmlForm>
        </div>
      </Fragment>
    )
  }
}

export default PlaceOrder
