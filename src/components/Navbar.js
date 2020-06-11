import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../img/covid.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
},
appBar: { 
    backgroundColor: "#121212", 
    height: "50px",
},
title: {
    flexGrow: 1,
  }
  
  }));


export default function Navbar() {
  const classes = useStyles();

    return(
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h5" className={classes.title} align='left'>
            <img src={Logo} alt='' title='Updated Daily' style={{width:'30px',height:'30px',float:'left',margin:'0px 10px'}} />COVID-19 Stats
            </Typography>
        
          </Toolbar>
        </AppBar>
      </div>
    )
  

}