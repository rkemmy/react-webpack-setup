import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/Home';
import AboutPage from './components/About';
import AndelaPage from './components/Andela';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-app">
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/andela" component={AndelaPage} />
        </div>
      </Router>
    );
  }
}
export default App;
