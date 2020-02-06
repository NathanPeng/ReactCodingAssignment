import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

export default function TypographyMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <Link to={'/profile'}>
        <MenuItem>
          <Typography variant="inherit">User Profile</Typography>
        </MenuItem>
        </Link>
        <Link to={'/list'}>
        <MenuItem>
          <Typography variant="inherit">Fund List</Typography>
        </MenuItem>
        </Link>
        <Link to={'/resetpassword'}>
        <MenuItem>
          <Typography variant="inherit">
            Password Reset
          </Typography>
        </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}
