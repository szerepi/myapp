import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './../Home/home';
import Users from './../Users/users';
import Repos from './../Repos/repos';
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
          </ul>
          <div className="content">            
            <Route exact path="/" component={Home}/>
            <Route path="/users" component={Users}/>
            <Route path="/repos" component={Repos}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
