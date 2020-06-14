import React, {Component} from 'react';

class GlobalStats extends Component {

    render() {
        let confirmed = ''
        if (this.props.global.TotalConfirmed) {confirmed= this.props.global.TotalConfirmed.toLocaleString()}
        let deaths = ''
        if (this.props.global.TotalDeaths) {deaths= this.props.global.TotalDeaths.toLocaleString()}
        let recovered = ''
        if (this.props.global.TotalRecovered) {recovered= this.props.global.TotalRecovered.toLocaleString()}
        return(
            <div className="statsBoard">
            <div className="statsDiv" style={{backgroundColor:'red'}}>
                <svg viewBox="0 0 100 50"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="15" style={{textAnchor:'middle',fill:'yellow'}}> {confirmed}</text>
            <text x="50" y="30" style={{textAnchor:'middle',fill:'yellow'}}> Confirmed</text>
            </svg>
            </div> 
            <div className="statsDiv" style={{backgroundColor:'black'}}>
                <svg viewBox="0 0 100 50"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">

            <text x="50" y="15" style={{textAnchor:'middle',fill:'white'}}>{deaths}</text>
            <text x="50" y="30" style={{textAnchor:'middle',fill:'white'}}>Deaths</text>
            </svg>
            </div>
            <div className="statsDiv" style={{backgroundColor:'lightblue'}}>
                <svg viewBox="0 0 100 50"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">

            <text x="50" y="15" style={{textAnchor:'middle',fill:'black'}}>{recovered}</text> 
            <text x="50" y="30" style={{textAnchor:'middle',fill:'black'}}>Recovered</text>
            </svg>
            </div>
            </div>
        )
    }
}

export default GlobalStats