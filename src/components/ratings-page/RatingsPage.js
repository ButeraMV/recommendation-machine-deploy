import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MovieList from './MovieList'

class RatingsPage extends Component {
  render() {
    return (
      <div className='ratings-page'>
        <h2>Please rate the following movies:</h2>
        <MovieList />
        <Link to='/recommendations'><button onClick={this.postRatings.bind(this)}>Submit</button></Link>
      </div>
    );
  }
}

export default RatingsPage;

