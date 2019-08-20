import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// available pages
import Home from './pages/Home/Home';
import UserPage from './pages/UserPage/UserPage';

export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/user/:id" component={UserPage}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}