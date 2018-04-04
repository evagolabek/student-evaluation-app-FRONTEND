import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_BATCH = 'ADD_BATCH'
export const SHOW_BATCHES = 'SHOW_BATCHES'
export const UPDATE_BATCH_SUCCESS = 'UPDATE_BATCH_SUCCESS'

export const getBatches = () => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/batches`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: SHOW_BATCHES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}



export const createBatch = () => (dispatch, getState) => {
  const state = getState()
  // const jwt = state.currentUser.jwt
console.log(state)
  request
    .post(`${baseUrl}/batches`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send({})
    .then(response => {
      dispatch({
        type: ADD_BATCH,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const updateBatch = (batchId, board) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/batches/${batchId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({board})
    .then(result => {
      dispatch({
        type: UPDATE_BATCH_SUCCESS
      })
    })
    .catch(err => console.error(err))
}
