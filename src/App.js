import React, { Component } from 'react';
import {Route} from 'react-router-dom';


import asyncComponent from './hoc/asyncComponent';
import SplashScreen from './containers/splash_screen';

const AsyncHomeScreen = asyncComponent(()=>{
    return import('./containers/home_screen')
});

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    HEADER
                </div>
                <div>
                    <Route path="/" exact component={SplashScreen} />
                    <Route path="/home" component={AsyncHomeScreen} />
                </div>
            </div>
        );
    }
}

export default App;