import React from 'react';
import Legend from './Legend';

function Attributions() {

    return(
      <div className="attributions">
        <Legend />
        <br/>
        &nbsp;API by: <a href="https://covid19api.com/" target="blank">Covid-19 API</a><br/>
        &nbsp;Data Provided By: <a href="https://github.com/CSSEGISandData/COVID-19" target="blank">COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University</a><br/>
        &nbsp;Country Flags Provided By: <a href="https://www.countryflags.io/" target="blank">Country Flags API</a>
      </div>
    )
  }

  export default Attributions