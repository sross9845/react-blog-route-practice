import React, { Component } from 'react';
import Home from './Home'
import Main from './Main'
import Movie from './Movie'
import Foods from './Foods'
import About from './About'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';


class app extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router>
      <div className='App'>
      <nav>
        <Link to='/'>HOME</Link> {' | '}
        <Link to='/main'>MAIN</Link> {' | '}
        <Link to='/movie'>MOVIE</Link> {' | '}
        <Link to='/foods'>FOODS</Link> {' | '}
        <Link to='/about'>ABOUT</Link> {' | '}
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/main" component={Main} />
      <Route path="/movie" component={Movie} />
      <Route path="/foods" component={Foods} />
      <Route path="/about" component={About} />
      </div>
      </Router>
     );
  }
}
 
export default app;
