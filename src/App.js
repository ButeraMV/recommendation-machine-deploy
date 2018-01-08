import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//includes
import './App.css';

//components
import Splash from './components/splash/Splash.js';
import RatingsPage from './components/ratings-page/RatingsPage.js';
import RecommendationPage from './components/recommendation-page/RecommendationPage.js';

class App extends Component {
  render() {
    return   (
      <Router>
      <div className="App">

        <Route path={`${process.env.PUBLIC_URL}/`} component={Splash} />
        <Route path={`${process.env.PUBLIC_URL}/ratings`} component={RatingsPage} />
        <Route path={`${process.env.PUBLIC_URL}/recommendations`} component={RecommendationPage} />
      </div>
      </Router>
    );
  }
}

export default App;

