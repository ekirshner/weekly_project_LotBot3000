import React, { Component } from 'react';

// Connect redux and react
import { connect } from 'react-redux';

// Import the action
import { getLots } from './actions';

import ModalCheckIn from './ModalCheckIn';
import ModalCheckOut from './ModalCheckOut';


class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ModalCheckInVisable: true,
            ModalCheckOutVisable: true,
            Space: null,
        };

        // Bind functions to component
        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleSubmissionCheckout = this.handleSubmissionCheckout.bind(this);
    }


// When a user clicks on a parking space, pass in the index & occupancy status
    handlePark(index, occupancyStatus) {
        // If the spot is vacant, do the following:
        if (occupancyStatus === null) {
            console.log(index + 'vacant')

            this.setState({
                ModalCheckInVisable: false,
                Space: index,
            });

        //If the spot is occupied, do the following:
        } else {
            console.log(index + 'occupado')

            this.setState({
                ModalCheckOutVisable: false,
                Space: index,
            });
        };
    }

// When a user clicks the submit button from the ModalCheckIn, do the following:
    handleSubmission (licensePlate) {
          console.log(this.props.match.params.id)
          console.log(this.state.Space)
          
        // Send a POST request to the API to "park a car"
        fetch('https://lotbot3000.herokuapp.com/lots/' + this.props.match.params.id  + '/' + this.state.Space, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                licensePlate: licensePlate,
            }),
        // Once the POST request has completed, call the getLots GET request function again to repopulate the data    
        }).then(() => {
            this.props.getLots()
        });

        // Reset the state
        this.setState ({
            ModalCheckInVisable: true,
            Space: null,
        });
    }

// When a user clicks the submit button from the ModalCheckOut, do the following:
    handleSubmissionCheckout () {
        this.setState ({
            ModalCheckOutVisable: true,
            Space: null,
        });
    }



    render() {
        const id = this.props.match.params.id;

// Wait for the lots to load. If there are lots, do the following:
        if (this.props.lots.length > 0) {

            // Map over the current lot and populate the parking spaces
            const parkingSpots = this.props.lots[id].spaces.map((spot, index) => {
                let occupancyStatus = '';
                let tag = '';

                if (spot.vehicle !== null) {
                    occupancyStatus = 'Occupied'
                    tag = "spot-occupied"
                } else if (spot.vehicle === null) {
                    occupancyStatus = "Vacant"
                    tag = "spot"
                }
                return (
                    <div className={ tag } key={ index } onClick={() => this.handlePark(index, spot.vehicle)}>
                        <p> { occupancyStatus } </p>
                        <p> { index } </p>
                    </div>
                );
            })


            return (
                <div className="details-component">
                     <div className="modals">
                        <p hidden={this.state.ModalCheckInVisable}>
                            <ModalCheckIn onButtonClick={ this.handleSubmission }/>
                        </p>
                        <p hidden={this.state.ModalCheckOutVisable}>
                            <ModalCheckOut onButtonClick={ this.handleSubmissionCheckout }/>
                        </p>
                    </div>

                    <p> Detailed View of Lot #{ this.props.lots[id].id }</p>
                    <p> Total: { this.props.lots[id].spaces.length } spaces</p>
                   
                    <div className="parking-lot">
                        { parkingSpots }
                    </div>
                </div>
            );

        // If the lots have not loaded yet, return nothing
        } else {
            return <div></div>;
        }
    }
}


// Create a state called lots that gets its data from state.parkingLots  
function state2Props(state) {
    return {
        lots: state.parkingLots,
    };
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


export default connect(state2Props, dispatch2Props)(Details);


