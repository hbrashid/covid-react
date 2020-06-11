import React, {Component} from 'react'
import RecoveredIcon from '@material-ui/icons/Favorite';
import DeathsIcon from '@material-ui/icons/FavoriteBorder';
import NewCasesIcon from '@material-ui/icons/NewReleases';
import TotalCasesIcon from '@material-ui/icons/Functions';

class Data extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hits: []
      };
    }
  
    render() {
      return (
        <div className="dataDiv">
          <div>
            <div style={{fontWeight: "bold"}}>
             <img src={`https://www.countryflags.io/${this.props.info.CountryCode}/shiny/24.png`} style={{float:'left',marginRight:'5px'}} /> {this.props.info.Country}
            </div>
          </div>
          <div>
          <TotalCasesIcon title="Confirmed Cases" style={{color:"red",height:'20px',width:'20px'}} />{this.props.info.TotalConfirmed}
          </div>
          <div>
          <DeathsIcon title="Total Deaths" style={{color:"black",height:'20px',width:'20px'}} />{this.props.info.TotalDeaths}
          </div>
          <div>
          <NewCasesIcon title="New Cases" style={{color:"red",height:'20px',width:'20px'}} />{this.props.info.NewConfirmed}
          </div>
          <div>
          <RecoveredIcon title="Total Recovered" style={{color:"blue",height:'20px',width:'20px'}} />{this.props.info.TotalRecovered}
          </div>
        </div>
      );
    }
  }

  export default Data