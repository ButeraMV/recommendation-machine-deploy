import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from '../header/Header'

class RecommendationPage extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('https://floating-woodland-34376.herokuapp.com/api/v1/movies/random')
    .then(results => {
      return results.json();
    }).then(data => {
      let movieArray = []
      data.forEach(function(element) {
        //console.log(element)
        movieArray.push(element.title)
      })
      console.log(movieArray)
      this.setState({movies: movieArray})
    })
  }

  render() {
    return (
      <div className='recommendation-page'>
        <h2>Recommended for you:</h2>
        {this.state.movies.map(function(movie){
          return <p>{movie}</p>;
        })}
      </div>
    );
  }
}

export default RecommendationPage;


