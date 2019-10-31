import React from 'react';
import {  Switch,NavLink, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';
import Users from './Users';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="ui pointing secondary menu">
                        <NavLink className="item" activeClassName="active" to="/home">Home</NavLink>
                        <NavLink className="item" activeClassName="active" to="/about">About</NavLink>
                        <NavLink className="item" activeClassName="active" to="/contact">Contact</NavLink>
                        <NavLink className="item" activeClassName="active" to="/users">Users</NavLink>
                    </div>
                    <div className="ui segment">
                        <Switch>
                            <Route path="/home" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/users" component={Users} />
                            <Route exact component={NotFound} />
                        </Switch>
                    </div>
                </div>

            </Router>
        );
    }
}

export default App;