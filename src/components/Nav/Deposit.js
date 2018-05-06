import React, { Component, Fragment } from 'react'

import './Deposit.scss'

export default class Deposit extends Component {
  state = {
    /*
      TODO: manage amount & tokenType which user wants to deposit
    */
    amount: '',
    tokenType: '',
  }

  onClickDeposit() {
    alert("comming soon!")
  }

  render() {
    return(
      /*
        TODO: if user clicks button, modal pops up to type amount and tokenType
      */
      <Fragment>
        <div className="Nav__Deposit--empty">
        </div>
        <button
          className="Nav__Deposit--button"
          onClick={this.onClickDeposit}
        >
          Deposit
        </button>
      </Fragment>
    )
  }
}
