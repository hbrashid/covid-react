import React, {Component} from 'react';

class GlobalStats extends Component {

    render() {
        let confirmed = ''
        if (this.props.global.TotalConfirmed) {confirmed= this.props.global.TotalConfirmed.toLocaleString()}
        let deaths = ''
        if (this.props.global.TotalDeaths) {deaths= this.props.global.TotalDeaths.toLocaleString()}
        let newConfirmed = ''
        if (this.props.global.NewConfirmed) {newConfirmed= this.props.global.NewConfirmed.toLocaleString()}
        let update = new Date(this.props.lastUpdate);

        return(
            <div className="statsContainer">
            <div className="statsHeader">World Totals<br/> <span style={{fontSize:'x-small',color:'white',lineHeight:'10px'}} >(Latest Update: {update.toLocaleString()})</span></div>
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

            <text x="50" y="15" style={{textAnchor:'middle',fill:'black'}}>{newConfirmed}</text> 
            <text x="50" y="30" style={{textAnchor:'middle',fill:'black'}}>New Cases</text>
            </svg>
            </div>
            </div>
            </div>
        )
    }
}

export default GlobalStats