import React, { Component } from 'react';

class Ratings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: props.stars
    }
  }

  assignStars(event) {
    event.preventDefault();
    //fetch('/', {
     //method: 'post',
     //headers: {'Content-Type':'application/json'},
     //body: {
      //'rating': this.stars
     //}
    //});
    console.log('')

  }

  render() {
    return (
      <div>
        <button onClick={this.assignStars} stars='1'>1</button>
        <button onClick={this.assignStars} stars='2'>2</button>
        <button onClick={this.assignStars} stars='3'>3</button>
        <button onClick={this.assignStars} stars='4'>4</button>
        <button onClick={this.assignStars} stars='5'>5</button>
      </div>

      //<p>test</p>
    );
  }
}

export default Ratings;

