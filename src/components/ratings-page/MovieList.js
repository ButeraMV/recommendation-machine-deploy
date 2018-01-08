import React, { Component } from 'react';
import Movie from './Movie'
import Ratings from './Ratings'

class MovieList extends Component {
  render() {
    return (
      <table className='movie-list'>
        <tbody>
        <tr>
          <td><Movie title='Toy Story' /></td>
          <td><Ratings /></td>
        </tr>
        <tr>
          <td><Movie title='Titanic' /></td>
          <td><Ratings /></td>
        </tr>
        <tr>
          <td><Movie title='Forrest Gump' /></td>
          <td><Ratings /></td>
        </tr>
        <tr>
          <td><Movie title='Star Wars: A New Hope' /></td>
          <td><Ratings /></td>
        </tr>
        <tr>
          <td><Movie title='The Princess Bride' /></td>
          <td><Ratings /></td>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieList;

