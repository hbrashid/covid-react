import React from 'react'
import RecoveredIcon from '@material-ui/icons/Favorite';
import DeathsIcon from '@material-ui/icons/FavoriteBorder';
import NewCasesIcon from '@material-ui/icons/NewReleases';
import TotalCasesIcon from '@material-ui/icons/Functions';

function Attributions() {

    return(
      <div className="attributions">
        <div>
          <TotalCasesIcon style={{color:"red",verticalAlign:"middle"}} />Total Cases
          <DeathsIcon style={{paddingLeft:"10px",verticalAlign:"middle"}} />Total Deaths
          <NewCasesIcon style={{paddingLeft:"10px", color:"red",verticalAlign:"middle"}} />New Cases
          <RecoveredIcon style={{paddingLeft:"10px", color:"blue",verticalAlign:"middle"}} />Total Recovered
        </div>
        <br/>
        &nbsp;API by: <a href="https://covid19api.com/" target="blank">Covid-19 API</a><br/>
        &nbsp;Data Provided By: <a href="https://github.com/CSSEGISandData/COVID-19" target="blank">COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University</a><br/>
        &nbsp;Country Flags Provided By: <a href="https://www.countryflags.io/" target="blank">Country Flags API</a>
      </div>
    )
  }

  export default Attributions