import React from 'react';
import Button from 'material-ui/Button';
import web3 from "../web3";

class Login extends React.Component {
  state = {
    status : 'Login',
    accounts: [],
    etherBalance: '',
  }

  handleLogin = async() => {
    const accounts = await web3.eth.getAccounts();
    const weiBalance = await web3.eth.getBalance(accounts[0])
    console.log(weiBalance.toString());
    const etherBalance = await web3.utils.fromWei(weiBalance, 'ether')

    this.setState({
        status: 'Balance : ',
        accounts,
        etherBalance,
     });

    if(!!this.state.accounts[0]){
        alert('success');
    } else{
        alert('need login with metamask on the rinkeby testnet');
    }
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleLogin} style={{color:'#f65534'}} size='small' >
          {this.state.status}
          <div>{this.state.etherBalance}</div>
        </Button>
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
export default Login;
