import React from 'react';

class Seat extends React.Component{
  constructor(props) {
    super(props);  // good practice to pass the state to super class
    this.state = { total: null };
    this.update = this.update.bind(this);
  }

  update(){


  }

  render() {
    console.log("Seat render");
    return (
      <div>
        <h3>Seat Component</h3>
        <label>Floor</label>
        <div>
          <label>Floor</label><input ref='seatPrice' type='text'/>
          <i className="fa fa-square fa-5x" aria-hidden="true"></i>
        </div>
      </div>
    );
  }

}
export default Seat;
