import React from 'react';
import Main from '../components/Main';
import App from '../components/App';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Route, IndexRoute } from 'react-router';

export default (
    <Route path="/" component={App}>
        <Route path="/profile" component={Profile} />
        <IndexRoute component={Main} />
    </Route>
);
