import React, { PureComponent } from 'react'
import './BatchList.css'
import {connect} from 'react-redux'
import {getBatches} from '../actions/batches'

class BatchList extends PureComponent {
componentWillMount() {
  this.props.getBatches()
}
  render() {
    const {batches} = this.props;
    if (!batches) return null


    return (
      <div className = 'batch-list'>
      {console.log(this.props)}
        <h2>Batches</h2>
        <table>
          <tr>
            <th>ID</th>
            <th className="title">Title</th>
            <th>Score</th>
            <th>Edit</th>
          </tr>

          {batches.map(batch =>
            <tr>
              <td width="5%">{batch.id}</td>
              <td width="70%" className="title">{batch.title}</td>
              <td width="10%"></td>
              <td width="15%" onClick={_=>window.location.href=`/edit/${batch.id}`} className='edit-button'>edit this batch</td>

            </tr>
          )}
        </table>
        <button onClick={_=>window.location.href=`/BatchAdd`} className='add-button'>Add New Batch</button>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		batches: state.batches,
    //error: state.login.error
	}
}

export default connect(mapStateToProps, {getBatches})(BatchList)
