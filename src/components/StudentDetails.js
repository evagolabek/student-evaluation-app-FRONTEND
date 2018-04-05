import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudents} from '../actions/students'


class StudentDetails extends PureComponent {
  componentWillMount() {
    console.log(this.props.student)
    this.props.getStudents(this.props.batchId)
  }


  render() {
    const {student} = this.props
    if (!student) return null

    return (
      <div className='student-details'>
        <h3>{ student.firstName }</h3>
        <h3>{ student.lastName }</h3>
        <img src={ student.image } alt='student'/>
        <p>{ student.colour }</p>
        <button> Add evaluation for this student </button>
        
      </div>
    )
  }
}


const mapStateToProps = function (state, props) {
  // console.log(props.match.params.batchId);
  // console.log(props.match.params.studentId);
  console.log(state.students);

	return {
    batchId: props.match.params.batchId,
    studentId: props.match.params.studentId,
    student: state.students !== null && state.students[props.match.params.studentId - 1],

  }
}

export default connect(mapStateToProps, {getStudents})(StudentDetails)
