import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import BuyOrder from './BuyOrder';
import SellOrder from './SellOrder';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  orderbar: {
    height : 30,
    padding: theme.spacing.unit * 2,
    color: '#ffffff',

  },
  buy: {
    height : 385,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#000000',
  },
  order: {
    height : 385,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#000000',
  },
  sell: {
    height : 385,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#000000',
  }
});

export class OrderBook extends React.Component {
    render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} className={classes.orderbar}>
            <Typography variant="title" color="inherit" noWrap>
              ORDER BOOK
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <BuyOrder/>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.order}>xs=3</Paper>
          </Grid>
          <Grid item xs={5}>
            <SellOrder/>
          </Grid>

        </Grid>
      </div>
    );
  }
}

OrderBook.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderBook);
