import * as request from 'superagent'
import {baseUrl} from '../constants'
import {SHOW_BATCHES, ADD_BATCH, UPDATE_BATCH} from './types'


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

export const createBatch = (o) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .post(`${baseUrl}/batches`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send(o)
    .then(response => {
      dispatch({
        type: ADD_BATCH,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const updateBatch = (batchId, batch) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .patch(`${baseUrl}/batches/${batchId}`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send({batch})
    .then(result => {
      dispatch({
        type: UPDATE_BATCH
      })
    })
    .catch(err => console.error(err))
}
