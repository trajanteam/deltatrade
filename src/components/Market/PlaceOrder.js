import React, { Component, Fragment } from 'react'

import './PlaceOrder.scss'

export default class PlaceOrder extends Component {
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
        <div className="Market__PlaceOrder--Header">
          Place Order!
        </div>
        <div className="Market__PlaceOrder--OrderType">
          <div
            className={`Market__PlaceOrder--${this.state.buyTab}`}
            onClick={this.onClickBuyTab}
          >
            Buy
          </div>
          <div
            className={`Market__PlaceOrder--${this.state.sellTab}`}
            onClick={this.onClickSellTab}
          >
            Sell
          </div>
        </div>
        <div className="Market__PlaceOrder--OrderForm">
          <htmlForm>
            <label
              htmlFor="tokenType"
              className="Market__PlaceOrder--Left"
            >
              {this.state.tokenType}
            </label>
            <input
              id="tokenType"
              placeholder="Amount to trade"
              className="Market__PlaceOrder--right"
              value={this.state.amount}
            />

            <label
              htmlFor="price"
              className="Market__PlaceOrder--Left"
            >
              {this.state.priceType}
            </label>
            <input
              id="price"
              placeholder="Price per token"
              className="Market__PlaceOrder--right"
              value={this.state.price}
            />

            <label
              htmlFor="totalPrice"
              className="Market__PlaceOrder--Left"
            >
              {this.state.paymentType}
            </label>
            <input
              id="totalPrice"
              placeholder="Total Price"
              className="Market__PlaceOrder--right"
              value={this.state.amount * this.state.price}
            />

            <label
              htmlFor="expires"
              className="Market__PlaceOrder--Left"
            >
              {this.state.tokenType}
            </label>
            <input
              id="expires"
              placeholder="numberOfBlocks"
              className="Market__PlaceOrder--right"
              value={this.state.expires}
            />
            <div className="Market__PlaceOrder--Left" />
            <button
              className="Market__PlaceOrder--button"
            >
              {this.state.button}
            </button>
          </htmlForm>
        </div>
      </Fragment>
    )
  }
}
