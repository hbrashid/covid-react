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
          <div style={{width:'40%',}}>
           <img src={`https://www.countryflags.io/${this.props.info.CountryCode}/shiny/24.png`} style={{float:'left',marginRight:'5px'}} /> {this.props.info.Country}
          </div>
          <div style={{width:'15%',fontSize:'small',verticalAlign:'middle',textAlign:'left'}}>
          <TotalCasesIcon title="Confirmed Cases" style={{color:"red",height:'20px',width:'20px',verticalAlign:'middle'}} />{this.props.info.TotalConfirmed.toLocaleString()}
          </div>
          <div style={{width:'15%',fontSize:'small',verticalAlign:'middle',textAlign:'left'}}>
          <DeathsIcon title="Total Deaths" style={{color:"black",height:'20px',width:'20px',verticalAlign:'middle'}} />{this.props.info.TotalDeaths.toLocaleString()}
          </div>
          <div style={{width:'15%',fontSize:'small',verticalAlign:'middle',textAlign:'left'}}>
          <NewCasesIcon title="New Cases" style={{color:"red",height:'20px',width:'20px',verticalAlign:'middle'}} />{this.props.info.NewConfirmed.toLocaleString()}
          </div>
          <div style={{width:'15%',fontSize:'small',verticalAlign:'middle',textAlign:'left'}}>
          <RecoveredIcon title="Total Recovered" style={{color:"blue",height:'20px',width:'20px',verticalAlign:'middle'}} />{this.props.info.TotalRecovered.toLocaleString()}
          </div>
        </div>
      );
    }
  }

  export default Data