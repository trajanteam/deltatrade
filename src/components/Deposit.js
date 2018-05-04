import React from 'react';
import web3 from "../ethereum/web3";
import deltatrade from "../ethereum/deltatrade";

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class Deposit extends React.Component {
  state = {
    open: false,
    value: '',
    message: 'To deposit Ether in your DeltaTrade wallet, type how much you want in *Ether* and click Deposit',
    btnMessage: 'Cancel',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDeposit = async (event) => {
      event.preventDefault();

      const accounts = await web3.eth.getAccounts();

      this.setState({
        message: 'Waiting on transaction success...',
        btnMessage: 'Please Wait..'
      })

      await deltatrade.methods.deposit().send({
          from: accounts[0],
          value: web3.utils.toWei(this.state.value, 'ether')
      });

      this.setState({
        message : 'Succeed to deposit!' ,
        btnMessage : 'Close',
      });

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
          <DialogTitle id="form-dialog-title">Deposit</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {this.state.message}
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Ether"
                type="amount"
                width="50%"
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value })}
              />
            </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {this.state.btnMessage}
            </Button>
            <Button onClick={this.handleDeposit} color="primary">
              Deposit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

}
