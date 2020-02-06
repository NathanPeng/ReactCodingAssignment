import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Allen Wake</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Age: 25</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>City: Jersey City, NJ</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Joining date: January 21st 2019</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Role: Developer</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>last online: 23 hr ago</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>account status: secured</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
