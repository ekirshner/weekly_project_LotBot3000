import React, { Component } from 'react';
import './App.css';

import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { Home } from './Home';
import Transactions from './Transactions';
import { Details } from './Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">LOT BOT</h1>
        </header>
        <nav>
            <ul>
              <li><Link to="/transactions" > View Transactions (Details) </Link></li> 
               {/* <li><Link to="/details" > Lot Overview (Details) </Link></li>   */}
              <li><Link to="/home" > View All Lots (Home) </Link></li> 
            </ul>
        </nav>

         <main>
          <Switch>
            <Route path="/transactions" component={ Transactions } />
            {/* <Route path="/lots/:id" component={ Details } />   */}
            <Route path="/details" component={ Details } />  
            <Route path="/home" component={ Home } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter (App);
