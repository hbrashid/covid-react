import React, { Component } from "react";
import "./App.css";

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
          flexDirection: "column",
          textAlign: "center",
          padding: "10px",
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
        <p>Total Confirmed: {this.props.info.TotalConfirmed}</p>
        <p>Total Deaths: {this.props.info.TotalDeaths}</p>
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
          hits: data.Countries,
        });
        console.log(data);
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
