import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getBatches} from '../actions/batches'
// import {Redirect} from 'react-router-dom'
import './BatchList.css'

class BatchList extends PureComponent {
  componentWillMount() {
    this.props.getBatches()
  }

  render() {
    const {batches} = this.props;
    if (!batches) return null

    return (
      <div className = 'batch-list'>
        <h2>Batches</h2>
        <table>
          <tr className='batch-header'>
            <th>Batch #</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>

          {batches.map(batch =>
            <tr className='batch-row' onClick={_=>window.location.href=`/batches/${batch.id}`}>
              <td className='batch-number'>{batch.number}</td>
              <td className='batch-startDate'>{batch.startDate}</td>
              <td className='batch-endDate'>{batch.endDate}</td>
            </tr>
          )}
        </table>
        <button onClick={_=>window.location.href=`/BatchAdd`} className='batch-addButton'>Add New Batch</button>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		batches: state.batches
	}
}

export default connect(mapStateToProps, {getBatches})(BatchList)
