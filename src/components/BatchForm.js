import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {createBatch} from '../actions/batches'

class BatchForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createBatch(this.state)
		this.props.history.push('/batches')
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
      <div className='add-batch-form'>
				<div className='batch-nr'>
					<label htmlFor="number">Batch #</label>
					<input name="number" id="number" value={
						this.state.number || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="start date">Start Date</label>
					<input name="startDate" id="startDate" value={
						this.state.startDate || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="end date">End Date</label>
					<input name="endDate" id="endDate" value={
						this.state.endDate || ''
					} onChange={ this.handleChange } />
				</div>
      </div>
				<button type="submit">Save</button>
			</form>
		)
	}
}

export default connect (null,{createBatch})(BatchForm)
