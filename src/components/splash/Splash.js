import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Splash extends Component {
  render() {
    return (
      <div className='splash-screen'>
        <h2>Welcome to the Recommendation Machine</h2>
        <Link to='/ratings'><button>Continue</button></Link>
      </div>
    );
  }
}

export default Splash;

