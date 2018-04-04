import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import LogoutPage from './components/LogoutPage'
import BatchList from './components/BatchList'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <h1 className="title">Student Evaluation App</h1>
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/batchlist" component={BatchList} />
      <Route exact path="/logout" component={LogoutPage} />

      </div>
      </Router>
    );
  }
}

export default App;
