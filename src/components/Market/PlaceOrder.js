import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    width: '90%',
    flexBasis: 100,
  },
  card: {
    minWidth: 50%,
  },
});

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class PlaceOrder extends Component {
  /*
    TODO:
    control states using Redux
  */
  // state = {
  //   buyTab: 'Activated',
  //   sellTab: 'Deactivated',
  //   button: 'Buy',
  //   tokenType: 'MKR',
  //   priceType: 'MKR/ETH',
  //   paymentType: 'ETH',
  //   amount: '',
  //   price: '',
  //   expires: '',
  // };

  // onClickBuyTab = () => {
  //   this.setState({
  //     buyTab: 'Activated',
  //     sellTab: 'Deactivated',
  //     button: 'Buy',
  //   });
  // };
  //
  // onClickSellTab = () => {
  //   this.setState({
  //     buyTab: 'Deactivated',
  //     sellTab: 'Activated',
  //     button: 'Sell',
  //   });
  // };


  /*
    TODO:
    make onInput Callback function to set state on each <input>
  */
  // onAmountInputChange = () => {
  //
  // };
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    // const { themeDirection } = this.props;
    const { classes } = this.props;

    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Buy" />
            <Tab label="Sell" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          // axis={themeDirection === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer >
            <TextField
              label="Amount MKR"
              className={classNames(classes.margin, classes.textField)}
              style={{ width: classes.textField.width }}
              InputProps={{
                endAdornment: <InputAdornment position="end">MKR</InputAdornment>,
              }}
            />
            <TextField
              label="Price"
              className={classNames(classes.margin, classes.textField)}
              style={{ width: classes.textField.width }}
              InputProps={{
                endAdornment: <InputAdornment position="end">ETH</InputAdornment>,
              }}
            />
            <TextField
              label="Amount ETH"
              className={classNames(classes.margin, classes.textField)}
              style={{ width: classes.textField.width }}
              InputProps={{
                endAdornment: <InputAdornment position="end">ETH</InputAdornment>,
              }}
            />
          </TabContainer>
          <TabContainer >
            <TextField
              label="Amount MKR"
              className={classNames(classes.margin, classes.textField)}
              style={{ width: classes.textField.width }}
              InputProps={{
                endAdornment: <InputAdornment position="end">MKR</InputAdornment>,
              }}
            />
            <TextField
              label="Price"
              className={classNames(classes.margin, classes.textField)}
              style={{ width: classes.textField.width }}
              InputProps={{
                endAdornment: <InputAdornment position="end">ETH</InputAdornment>,
              }}
            />
            <TextField
              label="Amount ETH"
              className={classNames(classes.margin, classes.textField)}
              style={{ width: classes.textField.width }}
              InputProps={{
                endAdornment: <InputAdornment position="end">ETH</InputAdornment>,
              }}
            />
          </TabContainer>
        </SwipeableViews>
      </Fragment>
    )
  }
}

PlaceOrder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PlaceOrder);
