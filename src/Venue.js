import React from 'react';

class Venue extends React.Component {
  constructor(props) {
    super(props);  // good practice to pass the state to super class
    this.state = { amount: 0, location: null, quantity: 0 };
    this.update = this.update.bind(this);
  }

  update() {
    console.log('update', this.refs.location.value);
    this.state.location = this.refs.location.value;
    this.state.quantity = this.refs.quantity.value;
    this.setState({ location: this.state.location, quantity: this.state.quantity });
    // this.setState({ location, quantity});
    this.updateServer();
  } // end update()

  updateServer() {
    const url = 'http://localhost:3333/venue';
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }).then(function(response) {
      // response.status     //=> number 100–599
      // response.statusText //=> String
      // response.headers    //=> Headers
      // response.url        //=> String
      console.log("got a successful response for POST /venue", response);
      // response.text()
      return JSON.stringify(response);
      // .then(function(responseText) { ... })
    }).then(function(data) {
      console.log('serverside status:', data)
      console.log(" success after JSON stringify");
    });

    this.props.update();
  }




  render() {
    console.log("Venue render");
    return (
      <div>
        <h3>Venue Component</h3>
        <input ref='quantity' type='text'/><label>Quantity</label>
        <div>
          <select ref='location'>
            <option value="floor">Floor</option>
            <option value="general">General</option>
          </select>
        </div>
        <input ref='amount' type='text'/><label>Amount</label>
        <div>
        <button onClick={this.update}>Update</button>
        </div>
      </div>
    );
  }

}
export default Venue;
