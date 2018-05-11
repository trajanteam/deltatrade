import React, { Component, Fragment } from 'react'

import './DepositModal.scss'
import web3 from 'ethereum/web3'
import deltatrade from 'ethereum/deltatrade/deltatrade'
import MKR from 'ethereum/token/MKR/MKR'

/*
TODO: How to set each web3.eth.contract insatance of each token?
If tokenType is inherited as props by parent component, still needs each web3 instance..
*/

class modal extends Component {
  state = {
    ethAmount: '',
    tokenAmount: '',
    message: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  depositEth = async (event) => {
    event.preventDefault()

    const accounts = await web3.eth.getAccounts()

    this.setState({ message: 'Waiting...'})

    await deltatrade.methods.deposit().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.ethAmount, 'ether')
    })

    this.setState({
      message: 'Succeed!',
      ethAmount: '',
    })

    alert('Done!')
  }

  depositToken = async (event) => {
    event.preventDefault()

    const tokenAddress = this.props.tokenAddress
    const value = this.state.tokenAmount
    const accounts = await web3.eth.getAccounts()

    this.setState({ message: 'Waiting...'})

    await MKR.methods.approve(tokenAddress, value).send({
      from: accounts[0],
    })

    this.setState({ message: 'Approved...'})

    await deltatrade.methods.depositToken(tokenAddress, value).send({
      from: accounts[0],
    })

    this.setState({
      message: 'Success!',
      tokenAmount: '',
    })
    alert('Done!')
  }

  render() {
    return (
      <div className={`Modal--${this.props.status}`}>
        <div className="Modal__Layout">
          <div className="Modal__Left">
            <div className="Modal__Header">
              <div className="Modal__HeaderToken">
                Token
              </div>
              <div className="Modal__HeaderAmount">
                Amount
              </div>
              <div className="Modal__HeaderEmpty">
                {this.state.message}
              </div>
            </div>
            <div className="Modal__OtherToken">
              <div className="Modal__OtherTokenType">
                {this.props.tokenType}
              </div>
              <div className="Modal__OtherTokenAmount">
                <input
                  name="tokenAmount"
                  placeholder="Token Amount"
                  value={this.state.tokenAmount}
                  onChange={this.handleChange}
                />
              </div>
              <div className="Modal__OtherTokenButton">
                <button
                  onClick={this.depositToken}>Deposit</button>
              </div>
            </div>
            <div className="Modal__Eth">
              <div className="Modal__EthType">
                ETH
              </div>
              <div className="Modal__EthAmount">
                <input
                  name="ethAmount"
                  placeholder="ETH Amount"
                  value={this.state.ethAmount}
                  onChange={this.handleChange}
                />
              </div>
              <div className="Modal__EthButton">
                <button
                  onClick={this.depositEth}>Deposit</button>
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
