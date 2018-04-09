import * as request from 'superagent'
import {baseUrl} from '../constants'
import {SHOW_STUDENTS, ADD_STUDENT, UPDATE_STUDENT, RANDOM_STUDENT} from './types'


export const getStudents = (batchId) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .get(`${baseUrl}/batches/${batchId}/students`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      // console.log(result.body.batchStudents);
      dispatch({
        type: SHOW_STUDENTS,
        payload: result.body.batchStudents
      })
    })
    .catch(err => console.error(err))
}

export const createStudent = () => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .post(`${baseUrl}/students`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send({})
    .then(response => {
      dispatch({
        type: ADD_STUDENT,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const updateStudent = (studentId, student) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .patch(`${baseUrl}/students/${studentId}`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send({student})
    .then(result => {
      dispatch({
        type: UPDATE_STUDENT
      })
    })
    .catch(err => console.error(err))
}

export const getRandomStudent = (batchId) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .get(`${baseUrl}/batches/${batchId}/randomStudent`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      // console.log(result.body);
      dispatch({
        type: RANDOM_STUDENT,
        payload: result.body.id
      })
    })
    .catch(err => console.error(err))
}

//
// export const deleteStudent = "DELETE_STUDENT"
// export function deleteBatch(id) {
//   return {
//     type: DELETE_STUDENT,
//     id
//   }
// }
