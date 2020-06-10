import React, { Component } from "react";
import "./App.css";
import RecoveredIcon from '@material-ui/icons/Favorite';
import DeathsIcon from '@material-ui/icons/FavoriteBorder';
import NewCasesIcon from '@material-ui/icons/NewReleases';
import TotalCasesIcon from '@material-ui/icons/Functions';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: 'space-around',
          textAlign: "center",
          padding: "10px",
          fontSize:'xx-large',
          border: '2px solid black',
          borderRadius: '5px',
          width: '50%',
          margin:'20px auto',
          webkitBoxShadow: '0px 6px 15px -5px #00000050', 
          boxShadow: '0px 6px 15px -5px #00000050'
        }}
      >
        <div>
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            {this.props.info.Country}
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [{}],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`https://api.covid19api.com/summary`)
      .then((json) => json.json())
      .then((data) => {
        this.setState({
          hits: data.Countries
        });
      })
      .catch((error) => console.log("parsing failed", error));
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>COVID-19 Stats</h2>

        {this.state.hits.map((covidData, index) => (
          <Data key={index} info={covidData} />
        ))}
      </div>
    );
  }
}

export default App;
