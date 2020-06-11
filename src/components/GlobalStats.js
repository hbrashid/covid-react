import React, {Component} from 'react';


class GlobalStats extends Component {

    render() {
        return(
            <div>
            <h4 style={{paddingLeft:"27px"}}>Global Stats: {this.props.global.TotalConfirmed} cases; {this.props.global.TotalDeaths} deaths; {this.props.global.TotalRecovered} recovered</h4>
            </div>
        )
    }
}

export default GlobalStats