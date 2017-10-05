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
    }

    render() {
        return (
            <div className="modal-checkin-surround">
                <p className="close" onClick={() => this.props.onCloseClick()}>X</p>
                <div className="modal-checkin">
                    <input onChange={(event) => this.handleChange(event)} type="text" name="number" placeholder="License Plate Number" />
                    <input type="text" name="color" placeholder="Vehicle Color" />
                    <input onClick={() => this.props.onButtonClick(this.state.licensePlate)} type="Submit" value="Park Car" className="park-car" />
                </div>
            </div>
        );
    }
}

export default ModalCheckIn;