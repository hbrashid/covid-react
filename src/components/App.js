import React, { Component } from "react";
import "./App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts"; // don't delete, will use for time lapse view
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Navbar from './Navbar';
import Data from './Data'
import Attributions from './Attributions';
import GlobalStats from './GlobalStats';

am4core.useTheme(am4themes_animated);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      global: []
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
    // setup the chart in its container
    let map = am4core.create("chartdiv", am4maps.MapChart);
    // we're going to use the low-res world map
    map.geodata = am4geodata_worldLow;
    // the type of map we're using 
    // here's the others: https://www.amcharts.com/docs/v4/chart-types/map/
    //
    map.projection = new am4maps.projections.Miller();
    // this is going to define all the countries on the map
    var polygonSeries = new am4maps.MapPolygonSeries();
    // and handle it automatically! ooh, yeah...
    polygonSeries.useGeodata = true;
    // get rid of Antarctica (remove the next line to bring it back)
    polygonSeries.exclude = ["AQ"];

    // this is the template to interface our own configurations
    // to the map countries (polygonseries)
    var polygonTemplate = polygonSeries.mapPolygons.template;
    // when we hover over a country show its name and number of cases
    polygonTemplate.tooltipText = "{name} : {value}";

    // when we click on a country zoom in on that country
    polygonTemplate.events.on("hit", function(ev) {
      ev.target.series.chart.zoomToMapObject(ev.target)
    });

    // set up the scale and values for the heatmap
    
    polygonSeries.heatRules.push({
        "target": polygonSeries.mapPolygons.template,
        "property": "fill",
        "min": am4core.color("#F5DBCB"),
        "max": am4core.color("#ED7B84"),
        "dataField": "value",
        "logarithmic": true
    });

    // check if the API data has filled the state object yet
    let mapData = this.state.hits || [];

    // go through all the API data and add each country's id, name and TotalConfirmed to the 
    // map
    // all these values can be changed to whatever we want to display on our map
    mapData.forEach(newData => {
        polygonSeries.data.push({"id": newData.CountryCode,"name": newData.Country, "value": newData.TotalConfirmed})
    });
    
    // tell it to make each country solid
    polygonTemplate.propertyFields.fill = "fill";

    // commit our settings
    map.series.push(polygonSeries);
    
    // establish our map. Ease to the pease.
    this.map = map;
  }

  // our initial API call 
  fetchData() {
    fetch(`https://api.covid19api.com/summary`)
      .then((json) => json.json())
      .then((data) => {
        this.setState({
          global: data.Global,
          hits: data.Countries
        });
        this.createNewChart();
      })
      .catch((error) => console.log("parsing failed", error));
  }

  render() {
    return (
      <div>
      <Navbar />
        {/* // the container div for the map */}
        <div id="chartdiv" className="map"></div>
        {/* // the global totals line above the country data */}
        <GlobalStats global={this.state.global} />

        {/* // map through each country and put its data on a card */}
        {this.state.hits.map((covidData, index) => (
          <Data key={index} info={covidData} />
        ))}

        {/* // show where all the data came from */}
        <Attributions />
      </div>
    );
  }
}

export default App;
