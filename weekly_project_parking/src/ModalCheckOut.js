import React, { Component } from 'react';

class ModalCheckOut extends Component {

    render() {
        return (
            <div className="modal-checkin">
                {/* <p className="modal-header">Enter Vehicle Information</p> */}
                <input onClick={() => this.props.onButtonClick()} type="Submit" value="Check Out Car" className="unpark-car"/>
            </div>
        );
    }
}

export default ModalCheckOut;