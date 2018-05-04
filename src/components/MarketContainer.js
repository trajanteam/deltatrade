import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import OrderBook from './OrderBook';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  tradingView: {
    height : 370,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#000000',
  },
  etc: {
    height : 370  ,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#000000',
  },
});

export class MarketContainer extends Component {
    render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={10}>
            <Paper className={classes.tradingView}>xs=10</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.etc}>xs=2</Paper>
          </Grid>
          <Grid item xs={10}>
            <OrderBook/>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.etc}>xs=2</Paper>
          </Grid>

        </Grid>
      </div>
    );
  }
}

MarketContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MarketContainer);
