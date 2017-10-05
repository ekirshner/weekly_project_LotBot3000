import React, { Component } from 'react';

class ModalCheckIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            licensePlate: '',
        };


    }

    handleChange(event) {
        
        this.setState ({
            licensePlate: event.target.value,
        });
        console.log(this.state.licensePlate)
    }

    render() {
        return (
            <div className="modal-checkin">
                {/* <p className="modal-header">Enter Vehicle Information</p> */}
                {/* <label for="number">License Plate Number </label> */}
                <input onChange={(event) => this.handleChange(event)} type="text" name="number" placeholder="License Plate Number" />
                {/* <label for="color"> Vehicle Color </label> */}
                <input type="text" name="color" placeholder="Vehicle Color" />
                <input onClick={() => this.props.onButtonClick(this.state.licensePlate)} type="Submit" value="Park Car" className="park-car" />
            </div>
        );
    }
}

export default ModalCheckIn;