import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { orderPlaceRequested } from '../actions'

const styles = theme => ({
 /*   place: {
        flexGrow: 1,
        height: 385,
        padding: theme.spacing.unit * 2,
        color: '#e7d0cb',
    },*/
    head: {

    },
    body: {
        height: 300,
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: '#2417e0'
    }
})

class PlaceOrder extends Component {
    changeQuantity(event, value) {
        
    }
    changePrice(event, value) {
            
    }
    placeOrder(dispatch) {
        return () => {
            const base = "0x0000000000000000000000000000000000000000"
            const quote = "0x0000000000000000000000000000000000000000"
            const amount = 1
            const price = 1
            const side = "bid"
            dispatch(base, quote, amount, price, side) 
        }
    }

    render() {
    const { classes } = this.props
    //const { value } = this.state
    return(
        <div>
            <AppBar position="static" className={classes.head}>
                <Tabs value={0} fullWidth onChange={this.handleChange}>
                    <Tab label="Buy" />
                    <Tab label="Sell" />
                </Tabs>
            </AppBar>

            <Paper elevation={4} className={classes.body}>
                <Typography variant="subheading" noWrap>
                    Available Balance:
                </Typography>
                <Typography variant="display1" noWrap>
                    {"100.00 ETH"}
                </Typography>
                <TextField
                    id="quantity"
                    label="Quantity"
                    onChange={this.changeQuantity}
                />
                <TextField
                    id="price"
                    label="Price"
                    onChange={this.changePrice}
                />
                <Button variant="raised" color="primary" onClick={this.placeOrder(this.props.placeOrder)}>
                    Order
                </Button>
            </Paper>
        </div>
    ) 
    }
}

PlaceOrder.propTypes = {
    classes: PropTypes.object,
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    placeOrder: (base, quote, amount, price, side) => dispatch(orderPlaceRequested(base, quote, amount, price, side))
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PlaceOrder))
