import React, { Component, Fragment } from 'react'

import './Deposit.scss'
import Modal from '../../utils/modal'

class Deposit extends Component {
  state = {
    /*
      TODO: manage amount & tokenType which user wants to deposit
    */
    tokenType: 'MKR',
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
        <Modal
          status={this.state.modal}
          tokenType={this.state.tokenType}
          click={this.onClickClose}
        />
      </Fragment>
    )
  }
}

export default Deposit
