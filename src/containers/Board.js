import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import './Board.css'
import {Redirect } from 'react-router-dom'
import {getBatches} from '../actions/batches'



class Board extends PureComponent {
  componentWillMount() {
    this.props.getUsers();
  }
 render() {
   if (!this.props.currentUser) return (
     <Redirect to="/"/>
   )
 return (
   <div class='Board'>
     <div class="header">
       <div class="title">Student Evaluation App</div>
       <div class="loggedUser"></div>
     )
   }
 }

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser,
    users: state.users
  }
}
export default connect(mapStateToProps,{getBatches})(Board);
