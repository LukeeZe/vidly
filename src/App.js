import React, { Component } from 'react';
import NavBar from './components/navbar.jsx';
import Counters from './components/counters'
import './App.css';
import Movies from './movies.jsx'

class App extends Component {
  state = { 
  }
  render() {
  return (
    <React.Fragment>
    <Movies />
    </React.Fragment>
  );}
}

export default App;
