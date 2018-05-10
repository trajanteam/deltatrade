import React, { Component, Fragment } from 'react'

import './modal.scss'

class modal extends Component {
  state = {
    ethAmount: '',
    tokenAmount: '',
  }

  inputTokenAmount = (event) => {
    this.setState({
      tokenAmount: event.target.value
    })
  }


  inputEthAmount = (event) => {
    this.setState({
      ethAmount: event.target.value
    })
  }

  render() {
    return (
      <div className={`Modal--${this.props.status}`}>
        <div className="Modal__Layout">
          <div className="Modal__Left">
            <div className="Left__Header">
              <div className="Header__Token">
                Token
              </div>
              <div className="Header__Amount">
                Amount
              </div>
              <div className="Header__Empty">
                Empty
              </div>
            </div>
            <div className="Left__OtherToken">
              <div className="OtherToken__Type">
                {this.props.tokenType}
              </div>
              <div className="OtherToken__Amount">
                <input
                  placeholder="Token Amount"
                  value={this.state.tokenAmount}
                  onChange={this.inputTokenAmount}
                />
              </div>
              <div className="OtherToken__Button">
                <button>Deposit</button>
              </div>
            </div>
            <div className="Left__Eth">
              <div className="Eth__Type">
                ETH
              </div>
              <div className="Eth__Amount">
                <input
                  placeholder="ETH Amount"
                  value={this.state.ethAmount}
                  onChange={this.inputEthAmount}
                />
              </div>
              <div className="Eth__Button">
                <button>Deposit</button>
              </div>
            </div>
          </div>
          <div className="Modal__Right">
            <button
              className="Modal__Button"
              onClick={this.props.click}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default modal
