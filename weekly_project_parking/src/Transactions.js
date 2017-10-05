import React, { Component } from 'react';

class Transactions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: [],
        };
    }

//When the page loads, fetch the transaction data from the API
    componentDidMount () {
        fetch('https://lotbot3000.herokuapp.com/transactions')
                .then(res => res.json())
                .then(response => { 
                    
                this.setState ({
                    entries: response,
                });
        });
    }

    render() {
       // Map over the entries and calculate the amount owed 
       const entries = this.state.entries.map((entry, index) => {
           const due = Math.round(parseInt(entry.timeDiffInSec)/3600 * 5);

           return <tr key={index} className="transactions-data">
                     <th>#{entry.id}</th>
                     <th>#{entry.lotId}</th>
                     <th>#{entry.spaceIndex}</th>  
                     <th>#{entry.vehicle.licensePlate}</th>
                     <th>${due} </th> 
                 </tr>
        })

          return (
            <div className="transactions-component">
                <h3> Transactions </h3>
                <table> 
                    <tr className="transactions-header">
                        <th>Reference </th>
                        <th>Lot </th>
                        <th>Space </th> 
                        <th>Vehicle</th> 
                        <th>Total </th>
                    </tr>
                    { entries }
                </table>       
                
            </div>
        );
    }
}

export default Transactions;