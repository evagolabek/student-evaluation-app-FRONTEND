import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getStudents} from '../actions/students'
import './BatchDetails.css'

class BatchDetails extends PureComponent {
componentWillMount() {
  this.props.getStudents(this.props.batch.id)
}
  render() {
    const {students, batch} = this.props;
    if (!students) return null

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

            {students.map(student =>
              <tr className='student-row' onClick={_=>window.location.href=`/students/${student.id}`}>
                <td className='student-name'>{`${student.firstName} ${student.lastName}`}</td>
                <td className='student-image'><img src={student.image} alt='student'/></td>
              </tr>
            )}
          </table>
          <button onClick={_=>window.location.href=`/BatchAdd`} className='batch-addButton'>Add New Batch</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
	return {
		students: state.students,
    batch: state.batches && state.batches[props.match.params.id],
	}
}

export default connect(mapStateToProps, {getStudents})(BatchDetails)
