import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getBatches} from '../actions/batches'
import {getStudents} from '../actions/students'
import './BatchDetails.css'

class BatchDetails extends PureComponent {
componentWillMount() {
  this.props.getBatches()
  this.props.getStudents(this.props.batchId)

}
  render() {
    const {students, batch} = this.props;
    if (!batch) return "This batch doesn't exist"

    return (
      <div className='batch-details'>
        <div className='batch-info'>
          <div className='batch-number'>{`Batch #${batch.number}`}</div>
          <div className='batch-startDate'>{`StartDate: ${batch.startDate}`}</div>
          <div className='batch-endDate'>{`EndDate: ${batch.endDate}`}</div>
        </div>
        <div className='student-list'>
          <h2>Students</h2>
          <table>
            <tr className='student-header'>
              <th>Name</th>
              <th>Image</th>
            </tr>

            {students && students.map(student =>
              <tr className='student-row' onClick={_=>window.location.href=`/batches/${batch.id}/students/${student.id}`}>
                <td className='student-name'>{`${student.firstName} ${student.lastName}`}</td>
                <td className='student-image'><img src={student.image} alt='student'/></td>
              </tr>
            )}
          </table>
          <button onClick={_=>window.location.href=`/addStudent`} className='student-addButton'>Add New Student</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  // console.log(state.batches)
  // console.log(Number(props.match.params.batchId));
  // console.log(state.batches && state.batches.filter(item => item.id === Number(props.match.params.batchId)));
	return {
		students: state.students,
    batchId: props.match.params.batchId,
    batch: state.batches && state.batches.find(batch => `${batch.id}`===props.match.params.batchId)
    // batch: state.batches && state.batches[props.match.params.batchId -1]
	}
}

export default connect(mapStateToProps, {getBatches, getStudents})(BatchDetails)
