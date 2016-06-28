import React from 'react';
import Venue from './Venue';
import Seat from './Seat';

class Concert extends React.Component{
  constructor(props) {
    super(props);  // good practice to pass the state to super class
  //  this.state = { quantity: null, x: };
  //  this.update = this.update.bind(this);
  }

  update(){
    console.log('Concert log');



  }

  render() {
    console.log("Concert render");
    return (
      <div>
        <h1>Concert</h1>
        <Venue update={this.update}/>
        <Seat />
      </div>
    );
  }

} // end class

export default Concert;
