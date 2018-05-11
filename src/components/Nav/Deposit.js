import React, { Component, Fragment } from 'react'

import './Deposit.scss'
import DepositModal from './DepositModal'

class Deposit extends Component {
  state = {
    /*
      TODO:
      get ERC20 Token selected in side bar and contract address of it
      give it to DepositModal Component as props
    */
    tokenType: 'MKR',
    tokenAddress: '0x65e09e4260d81bc58c585eba67b7a8d71020d4ec',
    modal: false,
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
    console.log(this.state.modal)
  }

  onClickClose = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    return (
      <Fragment>
        <div className="Deposit__Empty" />
        <button
          className="Deposit__Button"
          onClick={this.toggleModal}
        >
          Deposit
        </button>
        <DepositModal
          status={this.state.modal}
          tokenType={this.state.tokenType}
          tokenAddress={this.state.tokenAddress}
          click={this.onClickClose}
        />
      </Fragment>
    )
  }
}

export default Deposit
