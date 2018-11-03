import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
  };

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: orange, 
    },
  });

function Header(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography className={classes.grow}
                    style={{ textDecoration: 'none', color: 'white'}}
                    component={Link}
                    to ="/"
                    variant='headline'
                    >
                    ZenDoc
                </Typography>
                <div>
                    <Typography
                        margin='10px'
                        variant='subtitle1'
                        color='secondary'
                        className={classes.user_name}>
                    </Typography>
                    <div>
                        <Button
                            style={{ color: 'white'}}
                            component={Link}
                            to="/login"
                            className='login-button'
                            children="Sign In" />
                        <Button 
                            style={{ color: 'white'}}
                            component={Link} 
                            to="/register"
                            className='register-button'
                            children="Sign up" />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    </MuiThemeProvider>
  );
}


export default withStyles(styles)(Header);