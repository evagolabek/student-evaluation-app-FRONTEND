import {SHOW_STUDENTS, ADD_STUDENT, UPDATE_STUDENT} from '../actions/types'

export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_STUDENT:
      return {
        ...state,
        [payload.id]: payload
      }

    case SHOW_STUDENTS:
      return payload.students

    case UPDATE_STUDENT:
      return payload.reduce((students, student) => {
        students[student.id] = student
        return students
      }, {})

    default:
      return state
  }
}
