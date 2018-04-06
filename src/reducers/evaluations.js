import {ADD_EVALUATION, UPDATE_EVALUATION, SHOW_EVALUATIONS } from '../actions/types'

export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_EVALUATION:
      return {
        ...state,
        [payload.id]: payload
      }

    case SHOW_EVALUATIONS:
    return payload.evaluations

    case UPDATE_EVALUATION:
      return payload.reduce((evaluations, evaluation) => {
        evaluations[evaluation.id] = evaluation
        return evaluations
      }, {})

    default:
      return state
  }
}
