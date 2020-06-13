import React from 'react'
import RecoveredIcon from '@material-ui/icons/Favorite';
import DeathsIcon from '@material-ui/icons/FavoriteBorder';
import NewCasesIcon from '@material-ui/icons/NewReleases';
import TotalCasesIcon from '@material-ui/icons/Functions';

function Legend() {

return(
        <div style={{display:'inline',marginLeft:'80px'}}>
        <TotalCasesIcon style={{color:"red",verticalAlign:"middle"}} />Total Cases
        <DeathsIcon style={{paddingLeft:"10px",verticalAlign:"middle"}} />Total Deaths
        <NewCasesIcon style={{paddingLeft:"10px", color:"red",verticalAlign:"middle"}} />New Cases
        <RecoveredIcon style={{paddingLeft:"10px", color:"blue",verticalAlign:"middle"}} />Total Recovered
      </div>
)
}

export default Legend