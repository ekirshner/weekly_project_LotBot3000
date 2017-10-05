import React, { Component } from 'react';
import './App.css';

// Import routing
import { Link, Route, Switch, withRouter } from 'react-router-dom';

// Connect redux and react
import { connect } from 'react-redux';

// Import the action
import { getLots } from './actions';

// Import components
import Home from './Home';
import Transactions from './Transactions';
import  Details from './Details';


class App extends Component {

  componentDidMount() {
      this.props.getLots();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">LOT BOT</h1>
        </header>
        <nav>
            <ul>
              <li><Link to="/transactions" > View Transactions </Link></li> 
              <li><Link to="/lots" > View All Lots </Link></li> 
            </ul>
        </nav>

        <main>
          <Switch>
            <Route path="/transactions" component={ Transactions } />
            <Route path="/lots/:id" component={ Details } />  
            <Route path="/lots" component={ Home } />
          </Switch>
        </main>
      </div>
    );
  }
}



// Dispatch the response from the API fetch request to the getLots action creator
function dispatch2Props(dispatch) {
    return {
        getLots() {
            fetch('https://lotbot3000.herokuapp.com/lots')
                .then(res => res.json())
                .then(response => {
                    dispatch(getLots(response));
                });
        },
    };
}


export default withRouter(connect(null, dispatch2Props)(App));

