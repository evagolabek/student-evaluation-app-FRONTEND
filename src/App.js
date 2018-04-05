import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import LogoutPage from './components/LogoutPage'
import BatchList from './components/BatchList'
import BatchDetails from './components/BatchDetails'
import BatchCreator from './components/BatchCreator'
import StudentDetails from './components/StudentDetails'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="title">Student Evaluation App</h1>
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/batches" component={BatchList} />
          <Route exact path="/batches/:batchId" component={BatchDetails} />
          <Route exact path="/addBatch" component={BatchCreator} />
          <Route exact path="/batches/:batchId/students/:studentId" component={StudentDetails} />
          <Route exact path="/" render={ () => <Redirect to="/batches" /> } />
        </div>
      </Router>
    );
  }
}

export default App;
