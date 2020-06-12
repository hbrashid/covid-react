import React, {Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts"; 
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { forEach } from 'lodash';

am4core.useTheme(am4themes_animated);

class CountryData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hits: [],
        };
      }

      drawChart() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);

        chart.paddingRight = 20;
    
        let data = [];
          // check if the API data has filled the state object yet
        let chartData = this.state.hits || [];
        
        chartData.forEach (day => {

          data.push({ date: day.Date, value: day.Cases });
        })
        console.log(data);
        chart.data = data;
    
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
    
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
    
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
    
        series.tooltipText = "{valueY.value}";
        chart.cursor = new am4charts.XYCursor();
    
        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;
    
        this.chart = chart;
      }

      componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }
    
      componentDidMount() {
        this.fetchData();
      }

      fetchData() {
          let countrySlug = this.props.match.params.id;

          let countryUrl = `https://api.covid19api.com/country/${countrySlug}/status/confirmed`;

          fetch(countryUrl)
          .then(res => res.json())
            .then(data => {
                this.setState({
                    hits: data
                })
                this.drawChart();
            })
            .catch((error) => console.log("API error: ", error));
      }

      render() {
        return (
          <div id="chartdiv" style={{ width: "100%", height: "500px",marginTop:'100px' }}></div>
        );
      }

}

export default CountryData;