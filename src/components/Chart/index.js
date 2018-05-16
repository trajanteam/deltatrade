import React, { Component } from 'react'

import './index.scss'
import TradingChart from './TradingChart'

export default class Chart extends Component {
  render() {
    return (
      <div className="Chart">
        <TradingChart />
      </div>
    )
  }
}
