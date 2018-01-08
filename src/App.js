import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//includes
import './App.css';

//components
import Splash from './components/splash/Splash';
import RatingsPage from './components/ratings-page/RatingsPage';
import RecommendationPage from './components/recommendation-page/RecommendationPage';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return   (
      <Router>
      <div className="App">
      <Header />
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Splash} />
        <Route exact path={`${process.env.PUBLIC_URL}/ratings`} component={RatingsPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/recommendations`} component={RecommendationPage} />
      </div>
      </Router>
    );
  }
}

export default App;

