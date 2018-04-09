import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {createEvaluation} from '../actions/evaluations'


class EvaluationForm extends PureComponent {
	state = {}

	handleSubmit = async (e) => {
		e.preventDefault()
		await this.props.createEvaluation(this.state, this.props.match.params.studentId)
		window.location.href=`/batches/${this.props.match.params.batchId}/students/${this.props.match.params.studentId}`
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
					<label htmlFor="colour">Colour</label>
					<input name="colour" id="colour" value={
						this.state.colour || ''
					} onChange={ this.handleChange } />
				</div>


				<div>
					<label htmlFor="date">Date</label>
					<input name="date" id="date" value={
						this.state.date || ''
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

// const mapStateToProps = function (state, props) {
//
// 	return {
//     studentId: props.match.params.id,
//   }
// }

export default connect (null,{createEvaluation})(EvaluationForm)
