import React, {Component} from 'react';
import DeathsIcon from '@material-ui/icons/FavoriteBorder';
import RecoveredIcon from '@material-ui/icons/Favorite';

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
            <div style={{width:'100%',height:'130px',textAlign:'center',verticalAlign:'middle',backgroundColor:'red'}}>
                <svg viewBox="0 0 100 50"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="15" style={{textAnchor:'middle',fill:'yellow'}}> {confirmed}</text>
            </svg>
            </div> 
            <div style={{width:'100%',height:'20px',textAlign:'center',verticalAlign:'middle',backgroundColor:'red',color:'yellow',fontWeight:'bold'}}>
            Confirmed Cases
            </div>       
            <div style={{width:'50%',height:'150px',textAlign:'center',float:'left',verticalAlign:'middle',backgroundColor:'black'}}>
                <svg viewBox="0 0 100 50"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <DeathsIcon style={{color:"lightgrey",verticalAlign:'middle'}} />
            <text x="50" y="20" style={{textAnchor:'middle',fill:'white'}}>{deaths}</text>
            <text x="50" y="35" style={{textAnchor:'middle',fill:'white'}}>Deaths</text>
            </svg>
            </div>
            <div style={{width:'50%',height:'150px',textAlign:'center',float:'left',verticalAlign:'middle',backgroundColor:'lightblue'}}>
                <svg viewBox="0 0 100 50"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <RecoveredIcon style={{color:"blue",height:'20px',width:'20px',verticalAlign:'middle'}} />
            <text x="50" y="20" style={{textAnchor:'middle',fill:'black'}}>{recovered}</text> 
            <text x="50" y="35" style={{textAnchor:'middle',fill:'black'}}>Recovered</text>
            </svg>
            </div>
            </div>
        )
    }
}

export default GlobalStats