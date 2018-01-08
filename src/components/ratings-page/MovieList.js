import React, { Component } from 'react';
import Movie from './Movie'
import Ratings from './Ratings'

class MovieList extends Component {
  render() {
    return (
      <table className='movie-list'>
        <tbody>
        <tr>
          <td><Movie title='movie 1' /></td>
          <td><Ratings /></td>
        </tr>
        <tr>
          <td><Movie title='movie 2' /></td>
          <td><Ratings /></td>
        </tr>
        <tr>
          <td><Movie title='movie 3' /></td>
          <td><Ratings /></td>
        </tr>
        <tr>
          <td><Movie title='movie 4' /></td>
          <td><Ratings /></td>
        </tr>
        <tr>
          <td><Movie title='movie 5' /></td>
          <td><Ratings /></td>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieList;

