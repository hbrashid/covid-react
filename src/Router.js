import React from 'react';
import { Switch, Route } from 'react-router';
import App from './components/App';
import About from './components/About';
import CountryData from './components/CountryData';
// import Car from './components/Car';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/country/:id/:countryName" component={CountryData} />
        </Switch>
    )
}

// Start Router function here //
export default Router