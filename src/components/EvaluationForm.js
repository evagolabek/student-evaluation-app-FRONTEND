import React, {PureComponent} from 'react'


class EvaluationForm extends PureComponent {
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
      <div className='add-evaluation-form'>
				<div className='batch-nr'>
					<label htmlFor="string">Colour</label>
					<input name="string" id="string" value={
						this.state.string || ''
					} onChange={ this.handleChange } />
				</div>


				<div>
					<label htmlFor="remarks">Remarks</label>
					<input name="remarks" id="remarks" value={
						this.state.remarks || ''
					} onChange={ this.handleChange } />
				</div>
      </div>
				<button type="submit">Save</button>
			</form>
		)
	}
}

export default EvaluationForm
