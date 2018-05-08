import React, { Component, Fragment } from 'react'

import './index.scss'
import Header from './Header'
import BuyOrder from './BuyOrder'
import SellOrder from './SellOrder'
import PlaceOrder from './PlaceOrder'

class Market extends Component {
  render() {
    return (
      <Fragment>
        <div className="Orderbook">
          <Header />
          <SellOrder />
          <BuyOrder />
        </div>
        <div className="Order">
          <PlaceOrder />
        </div>
      </Fragment>
    )
  }
}

export default Market
