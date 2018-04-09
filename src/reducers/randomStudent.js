import {RANDOM_STUDENT} from '../actions/types'

export default function (state = null, {type, payload}) {
	switch (type) {
		case RANDOM_STUDENT:
			return payload

		default:
      return state
	}
}
