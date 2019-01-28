import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/andela">Andela</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr/>
        </div>
      </div>
    );
  };
}
export default HomePage;
