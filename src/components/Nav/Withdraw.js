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

  onClickWithdraw() {
    alert("comming soon!")
  }

  render() {
    return (
      /*
        TODO: if user clicks button, modal pops up to type amount and tokenType in
      */
      <button
        className="Withdraw__button"
        onClick={this.onClickWithdraw}
      >
        Withdraw
      </button>
    )
  }
}
