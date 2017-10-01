
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Use this to connect redux and react
import { connect } from 'react-redux';

//Import the action
import { getLots } from './actions';


export class Home extends Component {

    componentDidMount() {
        // this.props.getLots();
    }
    
    render() {
        // const lotsArr = this.props.lots.map((lot, index) => {
        //     return <li key={ index }> { lot.id } { lot.spaces.length }</li>
        // })
       

        // console.log(this.props.lots)

        return (
            <div>
                <Link to='/details' > Hey I'm home! </Link>
                 {/* { lotsArr }  */}
            </div>
        );
    }
}


function state2Props(state) { //create a state called lots that gets its data from state.parkingLots
    console.log('oh hi');
    return {
        lots: state.parkingLots,
    };
}

function dispatch2Props(dispatch) {
    console.log('d2p')
    return {
        perfect() {
            console.log('yaaaaaaay');
        },
        getLots() {
            console.log('gettin some lots')
            fetch('https://lotbot3000.herokuapp.com/lots')
                .then(res => res.json())
                .then(response => {
                    dispatch(getLots(response));
                });
        },
    };
}

export default connect(state2Props, dispatch2Props)(Home);