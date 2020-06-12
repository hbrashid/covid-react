import React, { Component } from 'react'
import { Container, Divider,Card } from '@material-ui/core'
import hassan from '../img/hassan.png';
import crashdaddy from '../img/crashdaddy.png';


class About extends Component {

    render() {
        return (
            <div className="text-gray" style={{marginTop:'150px'}}>
                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>Contributors</h1>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginBottom:'40px'}}>
                    <Card className="contributorCard" >
                    <a href="https://github.com/hbrashid" target="blank"> <img src={hassan} className="contributorPix" /><br/>
                       <span style={{fontWeight:'bold'}}>hbrashid</span></a><br/>
                        API, styling
                    </Card>
                    <Card className="contributorCard" >
                       <a href="https://github.com/crashdaddy" target="blank"> <img src={crashdaddy} className="contributorPix" /><br/>
                       <span style={{fontWeight:'bold'}}>crashdaddy</span></a><br/>
                       Heatmap, css
                    </Card>
                    </div>
                    <Divider />
                    <p>
                    &nbsp;API by: <a href="https://covid19api.com/" target="blank">Covid-19 API</a><br/>
                    &nbsp;Data Provided By: <a href="https://github.com/CSSEGISandData/COVID-19" target="blank">COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University</a><br/>
                    &nbsp;Country Flags Provided By: <a href="https://www.countryflags.io/" target="blank">Country Flags API</a>
                    </p>
                  
                </Container>
            </div>
        )
    }
}

export default About