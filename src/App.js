import React, { Component } from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent';
import HomeScreen from './containers/homeScreen';

const asyncDetailScreen = asyncComponent(()=>{
    return import('./containers/detailScreen');
});

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/detail" component={asyncDetailScreen} />
                <Route path="/" exact component={HomeScreen} />
                <Redirect to="/" />
            </Switch>
        );
    }
}

export default withRouter(App);