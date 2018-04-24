import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import deltatrade from "../deltatrade";
import web3 from "../web3";

export default class Deposit extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    this.depositEth().then(() => {
        console.log('Succeed to deposit!');
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} style={{color:'#00a35a'}} size='small' >Deposit</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occationally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  async depositEth(){
      const admin = await deltatrade.methods.admin().call();
      const feeAccount = await deltatrade.methods.feeAccount().call();
      const accounts = await web3.eth.getAccounts();
      const balance = await deltatrade.methods.tokens(0,accounts[0]).call();

      this.setState({ admin, feeAccount, balance });


      console.log(`This contract is managed by ${this.state.admin}`);
      console.log(`The feeAccount of this contract is ${this.state.feeAccount}`);
      console.log(`Your balance is ${web3.utils.fromWei(this.state.balance, 'ether')} ether!`);

      console.log('Waiting on transaction success...');

      deltatrade.methods.deposit().send({
          from: accounts[0],
          value: web3.utils.toWei('100', 'ether')
      });

  }
}
