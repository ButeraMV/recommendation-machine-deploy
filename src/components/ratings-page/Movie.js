import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className='movie'>
        {this.props.title}
      </div>
    );
  }
}

export default Movie;

