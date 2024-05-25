import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2), // sets padding to 16px
    maxWidth: 400,
    margin: 'auto',
    marginTop: theme.spacing(8),
  },
  form: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    width: '100%', 
  },
  signUpButton: {
    marginTop: theme.spacing(2),
    width: '50%', 
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h5" component="h2" align="center" gutterBottom>
        shelf<span style={{ fontWeight: 'bold' }}>share</span>
      </Typography>
      <Typography variant="body1" component="p" align="center" gutterBottom>
        SIGN IN
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="body1" component="p" align="center" gutterBottom>
              New to Shelfshare? 
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.signUpButton}
              component={Link}
              to="/signup"
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default LoginPage;