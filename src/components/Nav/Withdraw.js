import React, { Component } from 'react'

import './Withdraw.scss'

export default class Withdraw extends Component {
  state = {
    /*
      TODO: manage amount & tokenType which user wants to withdraw
    */
    amount: '',
    tokenType: '',
  }

  onClickDeposit() {
    alert("comming soon!")
  }

  render() {
    return (
      /*
        TODO: if user clicks button, modal pops up to type amount and tokenType
      */
      <button
        className="Nav__Withdraw--button"
        onClick={this.onClickDeposit}
      >
        Withdraw
      </button>
    )
  }
}
