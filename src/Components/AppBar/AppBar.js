import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './AppBar.css';
import { country_list } from './listofCountries';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    background: "#fff",
    marginLeft: "-5px"
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  console.log(country_list);
  return (
    <div className={classes.root}>
      <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="#999" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography> <span className = "label">DashBoard </span> </Typography>
          <div style={{ width: 300, marginLeft:'auto'}}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={country_list.map((option) => option)}
              renderInput={(params) => (
              <TextField {...params} label="Search By Country" margin="normal" variant="outlined" />
            )}
          />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}