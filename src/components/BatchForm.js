import React, {PureComponent} from 'react'

class BatchForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
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

export default BatchForm
