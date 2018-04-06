import {SHOW_BATCHES, ADD_BATCH, UPDATE_BATCH} from '../actions/types'

export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_BATCH:
      return {
        ...state,
        [payload.id]: payload
      }

    case SHOW_BATCHES:
      return payload.batches

    case UPDATE_BATCH:
      return payload.reduce((batches, batch) => {
        batches[batch.id] = batch
        return batches
      }, {})

    default:
      return state
  }
}
