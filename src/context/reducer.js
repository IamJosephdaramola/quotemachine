import { GET_QUOTES, QUOTE_ERROR } from './types';

export default (state, action) => {
	switch (action.type) {
		case GET_QUOTES:
			return {
				...state,
				quotes: action.payload,
				loading: false
			};
		case QUOTE_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
