import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import 'typeface-roboto'

import { mailFolderListItems } from './CoinData';
import MarketContainer from './components/MarketContainer';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

const drawerWidth = 140;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        backgroundColor: '#0f0f0f',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        backgroundColor: '#1c222d',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: '#2b3441',
        padding: theme.spacing.unit * 1,
        minWidth: 0, // So the Typography noWrap works
    },
    bootstrapRoot: {
        padding: '10px 10px',
    },
    bootstrapInput: {
        backgroundColor: '#2b3441',
        fontSize: 16,
        color: '#979999',
        padding: '4px 8px',
        width: '10px',
    },
    flex: {
        flex: 1
    },
    toolbar: theme.mixins.toolbar,
});

class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>

                <AppBar position="absolute" className={classes.appBar} elevation={0}>
                    <Toolbar>
                        <Typography variant="title" color="inherit"  className={classes.flex} noWrap>
                            EXCHANGE : )
                        </Typography>
                        <Deposit />
                        <Withdraw />
                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
                    <div className={classes.toolbar} />
                    <TextField defaultValue="Find..." id="bootstrap-input"
                               InputProps={{
                                   disableUnderline: true,
                                   classes: {
                                       root: classes.bootstrapRoot,
                                       input: classes.bootstrapInput,
                                   },
                               }}
                    />
                    <List>{mailFolderListItems}</List>
                </Drawer>

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <MarketContainer />
                </main>

            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
