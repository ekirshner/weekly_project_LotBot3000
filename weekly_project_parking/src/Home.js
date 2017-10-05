
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Connect redux and react
import { connect } from 'react-redux';

import search from './Search.png';
import Transactions from './Transactions';



class Home extends Component {
    
    render() {
        // Loop over lots and display the lot number & number of parking spaces
        const lotsArr = this.props.lots.map((lot, index) => {
            return <li key={ index }> <Link to={'/lots/' + index}> <img className="search-icon" src={ search } /> Lot Number:<span> { lot.id } </span> ({ lot.spaces.length } spaces)</Link> </li>
        })

        return (
            <div className="home-component">
                <h3> Current Lots </h3>
                <ul className="lots-home">
                { lotsArr } 
                </ul> 
            </div>
        );
    }
}


// Create a state called lots that gets its data from state.parkingLots  
function state2Props(state) { 
    return {
        lots: state.parkingLots,
    };
}



export default connect(state2Props, null)(Home);