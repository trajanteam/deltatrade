import React, { Component } from 'react'

import web3 from '../../ethereum/web3'
import deltatrade from '../../ethereum/deltatrade/deltatrade'
import './Login.scss'

export default class Login extends Component {
  state = {
    /*
      TODO: manage user's login status & balance & accountAddress
    */
    login: false,
    account: '0x5d4ab8d6fad',
    balance: '1000000',
  }

  async componentDidMount() {
    const userAccount = await web3.eth.getAccounts()
    const weiBalance = await deltatrade.methods.balanceOf(0, userAccount[0]).call()
    const etherBalance = await web3.utils.fromWei(weiBalance, 'ether')

    if (!userAccount[0]) {
      console.log('YOU NEED TO LOGIN WITH METAMASK!!!')
    } else {
      console.log('WELCOME TO DELTATRADE !!!')
      this.setState({
        login: true,
        account: userAccount[0],
        balance: etherBalance,
      })
    }
  }

  render() {
    return (
      <div className="Nav__Login">
        <div className="Login__account">
          Account: {this.state.account}
        </div>
        <div className="Login__empty">
        </div>
        <div className="Login__balance">
          DeltaTrade Balance: {this.state.balance}
        </div>
      </div>
    )
  }
}
