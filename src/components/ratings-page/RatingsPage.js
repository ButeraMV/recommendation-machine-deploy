import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MovieList from './MovieList'

// the Link submit button is going to post to flask to add the user's known preferences

class RatingsPage extends Component {
  render() {
    return (
      <div className='ratings-page'>
        <h2>Please rate the following movies:</h2>
        <MovieList />
        <Link to='/recommendations'><button>Submit</button></Link>
      </div>
    );
  }
}

export default RatingsPage;

