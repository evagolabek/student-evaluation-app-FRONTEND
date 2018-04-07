import * as request from 'superagent'
import {baseUrl} from '../constants'
import {ADD_EVALUATION, UPDATE_EVALUATION, SHOW_EVALUATIONS} from './types'



export const getEvaluations = (studentId) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .get(`${baseUrl}/students/${studentId}/evaluations`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      console.log(result.body.studentEvaluations);
      dispatch({
        type: SHOW_EVALUATIONS,
        payload: result.body.studentEvaluations
      })
    })
    .catch(err => console.error(err))
}

export const createEvaluation = (evaluation, props) => (dispatch, getState) => {
  console.log('hello');
  // const state = getState()
  // const jwt = state.currentUser.jwt
  console.log(props.match.params.id);
  const studentId = props.match.params.id
  request
    .post(`${baseUrl}/students/${studentId}/users/1/evaluations`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send(evaluation)
    .then(response => {
      dispatch({
        type: ADD_EVALUATION,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const updateEvaluation = (evaluationId, evaluation) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .patch(`${baseUrl}/evaluations/${evaluationId}`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send({evaluation})
    .then(result => {
      dispatch({
        type: UPDATE_EVALUATION
      })
    })
    .catch(err => console.error(err))
}
