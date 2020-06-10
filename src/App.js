import React, { Component } from "react";
import "./App.css";
import RecoveredIcon from '@material-ui/icons/Favorite';
import DeathsIcon from '@material-ui/icons/FavoriteBorder';
import NewCasesIcon from '@material-ui/icons/NewReleases';
import TotalCasesIcon from '@material-ui/icons/Functions';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Logo from './img/covid.png';

am4core.useTheme(am4themes_animated);

function Attributions() {

  return(
    <div className="attributions">
      &nbsp;API by: <a href="https://covid19api.com/" target="blank">Covid-19 API</a><br/>
      &nbsp;Data Provided By: <a href="https://github.com/CSSEGISandData/COVID-19" target="blank">COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University</a>
    </div>
  )
}

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
      hits: [],
    };
  }

 
  componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
    }
  }

  componentDidMount() {
    this.fetchData();

  
  }

  createNewChart = () => {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();
    var polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name} : {value}";
    polygonSeries.heatRules.push({
        "target": polygonSeries.mapPolygons.template,
        "property": "fill",
        "min": am4core.color("#F5DBCB"),
        "max": am4core.color("#ED7B84"),
        "dataField": "value",
        "logarithmic": true
    });

    let mapData = this.state.hits || [];
    mapData.forEach(newData => {
        polygonSeries.data.push({"id": newData.CountryCode,"name": newData.Country, "value": newData.TotalConfirmed})
    });
    
    polygonTemplate.propertyFields.fill = "fill";
    map.series.push(polygonSeries);
    
    this.map = map;
  }

  fetchData() {
    fetch(`https://api.covid19api.com/summary`)
      .then((json) => json.json())
      .then((data) => {
        this.setState({
          hits: data.Countries
        });
        this.createNewChart();
      })
      .catch((error) => console.log("parsing failed", error));
  }

  render() {
    return (
      <div>
        <div id="chartdiv" className="map"></div>
        <img src={Logo} alt='' title='Updated Daily' style={{width:'24px',height:'24px',float:'left',margin:'5px 10px'}} /><h2 style={{ textAlign: "left" }}>COVID-19 Stats</h2>

        {this.state.hits.map((covidData, index) => (
          <Data key={index} info={covidData} />
        ))}
        <Attributions />
      </div>
    );
  }
}

export default App;
