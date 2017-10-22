import React, { Component } from 'react';
import SearchGithub from './components/SearchGithub';
import Home from './components/Home';
import About from './components/About';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <Router>
            <div className="main-container">
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/searchgithub">Search Github</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <div className="container">
                    <Route exact path="/" component={Home}/>
                    <Route path="/searchgithub" component={SearchGithub}/>
                    <Route path="/about" component={About}/>
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
