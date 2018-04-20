import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import web3 from './web3';
import deltatrade from './deltatrade.js';
import Nav from './Nav';

class App extends Component {
  state = {
    admin: '',
    feeAcount: '',
    value: '',
    message: '',
    balance: ''
  };

  async componentDidMount() {
    const admin = await deltatrade.methods.admin().call();
    const feeAccount = await deltatrade.methods.feeAccount().call();
    const accounts = await web3.eth.getAccounts();
    const balance = await deltatrade.methods.tokens(0,accounts[0]).call();

    this.setState({ admin, feeAccount, balance });
  }

  onSubmit = async (event) => {
      event.preventDefault();

      const accounts = await web3.eth.getAccounts();

      this.setState({ message: 'Waiting on transaction success...' })

      await deltatrade.methods.deposit().send({
          from: accounts[0],
          value: web3.utils.toWei(this.state.value, 'ether')
      });

      this.setState({ message : 'Succeed to deposit!' });

  };

  render() {
    return (

      <div>
        <Nav name="DeltaTrade" />

        <h2>DeltaTrade Contract</h2>
        <p>This contract is managed by {this.state.admin}</p>
        <p>The feeAccount of this contract is {this.state.feeAccount}</p>

        <form onSubmit={this.onSubmit}>
          <h4>Deposit Ether!</h4>
            <div>
                <label>Amount of ether to deposit</label>
                <input
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value})}
                />
                <button>Deposit</button>
            </div>
        </form>

        <h1>{this.state.message}</h1>
        <p>Your balance is {web3.utils.fromWei(this.state.balance, 'ether')} ether!</p>
      </div>
    )
  }
}

export default App;
