import React, { Component, Fragment } from 'react'

import './Deposit.scss'

class Deposit extends Component {
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
        <div className="Deposit__empty">
        </div>
        <button
          className="Deposit__button"
          onClick={this.onClickDeposit}
        >
          Deposit
        </button>
      </Fragment>
    )
  }
}

export default Deposit
