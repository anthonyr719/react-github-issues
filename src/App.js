import React from 'react';
import './App.css';
import Home from './Home';
import axios from 'axios';
import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {


  componentDidMount() {
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100').then( result => {
      console.log(result)
      let data = result.data;
      this.setState({
        data
      })
    })
  }


  render() {
    return (
      <Router>
        <nav>
          <Link to="/">HOME</Link>{' '}
        </nav>
        <Route exact path='/' component={Home} />
      </Router>
    )
  }
};

export default App;