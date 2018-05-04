import React from 'react';
import Button from 'material-ui/Button';
import web3 from '../ethereum/web3';
import deltatrade from '../ethereum/deltatrade';

class Balance extends React.Component {
  state = {
    etherBalance: '',
  }

  async componentDidMount() {
    const weiBalance = await deltatrade.methods.balanceOf(0, this.props.account).call()
    console.log(weiBalance);
    const etherBalance = await web3.utils.fromWei(weiBalance, 'ether')
    console.log(etherBalance);
    this.setState({
      etherBalance: weiBalance
     });
  };

  render() {
    return (
      <div>
          <div>DeltaTrade Balance: {this.state.etherBalance}</div>
      </div>
    );
  }
}
// async depositEth(){
//     const admin = await deltatrade.methods.admin().call();
//     const feeAccount = await deltatrade.methods.feeAccount().call();
//     const accounts = await web3.eth.getAccounts();
//     const balance = await deltatrade.methods.tokens(0,accounts[0]).call();
//
//     this.setState({ admin, feeAccount, balance });
//
//
//     console.log(`This contract is managed by ${this.state.admin}`);
//     console.log(`The feeAccount of this contract is ${this.state.feeAccount}`);
//     console.log(`Your balance is ${web3.utils.fromWei(this.state.balance, 'ether')} ether!`);
//
//     console.log('Waiting on transaction success...');
//
//     deltatrade.methods.deposit().send({
//         from: accounts[0],
//         value: web3.utils.toWei('100', 'ether')
//     });
//
// }
export default Balance;
