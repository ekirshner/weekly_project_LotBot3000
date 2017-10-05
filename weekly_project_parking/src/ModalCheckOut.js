import React, { Component } from 'react';

class ModalCheckOut extends Component {

    render() {
        return (
            <div className="modal-checkin-surround">
                <p className="close" onClick={() => this.props.onCloseClick()}>X</p>
                <div className="modal-checkin">
                    <input onClick={() => this.props.onButtonClick()} type="Submit" value="Check Out Car" className="unpark-car"/>
                </div>
            </div>
        );
    }
}

export default ModalCheckOut;