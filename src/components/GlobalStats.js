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
            <div style={{marginTop:'80px'}}>
            <h3 style={{paddingLeft:"25px"}}>Global Stats: {confirmed} cases; {deaths} deaths; {recovered} recovered</h3>
            </div>
        )
    }
}

export default GlobalStats