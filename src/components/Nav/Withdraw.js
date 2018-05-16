import React, { Component, Fragment } from 'react'

import './Withdraw.scss'
import WithdrawModal from './WithdrawModal'

class Withdraw extends Component {
  state = {
    /*
      TODO:
      get ERC20 Token selected in side bar and contract address of it
      give it to WithdrawModal Component as props
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
        <button
          className="Withdraw__Button"
          onClick={this.toggleModal}
        >
          Withdraw
        </button>
        <WithdrawModal
          status={this.state.modal}
          tokenType={this.state.tokenType}
          tokenAddress={this.state.tokenAddress}
          click={this.onClickClose}
        />
      </Fragment>
    )
  }
}

export default Withdraw
