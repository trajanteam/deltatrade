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
    const userBalance = await web3.eth.getBalance(userAccount[0])

    if (!userAccount[0]) {
      console.log('YOU NEED TO LOGIN WITH METAMASK!!!')
    } else {
      console.log('WELCOME TO DELTATRADE !!!')
      this.setState({
        login: true,
        account: userAccount[0],
        balance: userBalance,
      })
    }
  }

  render() {
    return (
      <div className="Nav__Login">
        <span>
          Account: {this.state.account}
        </span>
        <span>
          Balance: {this.state.balance}
        </span>
      </div>
    )
  }
}
