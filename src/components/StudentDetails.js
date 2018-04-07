import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getEvaluations} from '../actions/evaluations'
import {getBatches} from '../actions/batches'
import {getStudents} from '../actions/students'
import './StudentDetails.css'


class evaluationDetails extends PureComponent {
  componentWillMount() {
    this.props.getStudents(this.props.batchId)
    //console.log(this.props.studentId)
    this.props.getEvaluations(this.props.studentId)
  }


  render() {
    const {student, evaluations} = this.props
    console.log(evaluations);
    if (!student) return "No Student"

    return (
      <div className='student-details'>
        <h3>{ student.firstName }</h3>
        <h3>{ student.lastName }</h3>
        <img src={ student.image } alt='student'/>
        <p>{ student.colour } </p>
        <div className='evaluation-list'>
          <h2>evaluations</h2>
          <table>
            <tr className='evaluation-header'>
              <th>Date</th>
              <th>Colour</th>
              <th>Remarks</th>
            </tr>

            {evaluations && evaluations.map(evaluation =>
              <tr className='evaluation-row' onClick={_=>window.location.href=`/students/${student.id}/evaluations/${evaluation.id}`}>
                <td className='evaluation-date'>{evaluation.date}</td>
                <td className='evaluation-colour'>{evaluation.colour}</td>
                <td className='evaluation-remarks'>{evaluation.remarks}</td>
              </tr>
            )}
          </table>
          <button onClick={_=>window.location.href=`/students/${student.id}/evaluations`} className='evaluation-addButton'>Add Evaluation</button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = function (state, props) {
  // console.log(props.match.params.batchId);
  // console.log(props.match.params.evaluationId);
  console.log(state.evaluations);

	return {
    batchId: props.match.params.batchId,
    studentId: props.match.params.studentId,
    evaluations: state.evaluations,
    // evaluationId: props.match.params.evaluationId,
    student: state.students !== null && state.students.find(student => `${student.id}`===props.match.params.studentId),
    // student: state.students !== null && state.students[props.match.params.studentId - 1],

  }
}

export default connect(mapStateToProps, {getBatches, getStudents, getEvaluations})(evaluationDetails)
