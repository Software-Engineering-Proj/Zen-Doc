import React, { Component } from 'react';
import { Button, TextField, withStyles, Grid, Typography
} from '@material-ui/core';
import classes from './register.module.css';
import icon from '../../images/icon.png'
// more components at https://material-ui.com/getting-started/usage/


class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
                first_name: "",
                last_name: "",
				email: "",
				password: "",
			}
    }		
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  // update state on input change
	handleChange(event) {
		this.setState({
			user: {
				...this.state.user,
				[event.target.id]: event.target.value
			}
		});
	//console.log(event.target.value);
	}

 	//submit user state as json body
     handleSubmit(event) {
		event.preventDefault();
		const data = JSON.stringify(this.state.user);
		document.getElementById("myForm").reset();
		console.log(data);
    }
    
    render() {
        const { user } = this.props;
        return (
            <div className={classes.Container}>
                <div className={classes.PageColumns}>
                    <div className={classes.PageColumn_left}>
                        <div className={classes.Art} />
                    </div>
                    <div className={classes.PageColumn_right}>
                        <div className={classes.ColumnContainer}>
                            <div>
                                <img alt="icon" src={icon} className={classes.Icon}/>    
                            </div>
                            <h1 className={classes.Title}>Join the ZenDoc community.</h1>
                            <p className={classes.Text1}>By having a ZenDoc account, you create, edit and share documents online, for free.</p>
                            <p className={classes.Text2}>Sign up in just seconds.</p>
                            <form className={classes.Form} 
                                    id="main_form"
                                    onSubmit={this.handleSubmit}>
                                <Grid container justify='flex-start' >
                                    <Grid container direction='column' xs='12' spacing='4' >
                                        <Grid container item direction='row' spacing='16' >
                                            <Grid item xs='6'>
                                                <TextField InputProps={{className: classes.TextField}}
                                                    name='firstName'
                                                    label='First'
                                                    id='first_name'
                                                    type='text'
                                                    variant='outlined'
                                                    required
                                                    margin="dense"
                                                />
                                            </Grid>
                                            <Grid item xs='6'>
                                                <TextField InputProps={{className: classes.TextField}}
                                                    name='lastName' 
                                                    id='last_name' 
                                                    label='Last' 
                                                    type='text'
                                                    variant='outlined' 
                                                    required
                                                    margin="dense"
                                                    fullWidth={true}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item >
                                            <TextField InputProps={{className: classes.TextField}}
                                                id="email"
                                                label="Email"
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                margin="dense"
                                                variant="outlined"
                                                required
                                                onChange={this.handleChange}
                                                fullWidth={true} />
                                        </Grid>
                                        <Grid item >
                                            <TextField InputProps={{className: classes.TextField}}
                                                id="password"
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                                margin="dense"
                                                variant="outlined"
                                                required
                                                onChange={this.handleChange}
                                                fullWidth={true} />
                                        </Grid>											
                                    </Grid>
                                    <button type="submit" className={classes.Submit}>SIGN IN</button>
                                </Grid>
                            </form>
                        <div>
                            <span>Already have a ZenDoc Account?</span>&ensp;
                            <a href="/login" className={classes.Signin}>SIGN IN</a>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
        )
    }
}

export default Register;

