import React, { useReducer } from 'react';
import axios from 'axios';
import Context from './context';
import Reducer from './reducer';
import { GET_QUOTES, QUOTE_ERROR } from './types';

const QuoteState = props => {
	const initialState = {
		quotes: '',
		error: null,
		loading: true
	};
	const [state, dispatch] = useReducer(Reducer, initialState);

	// Get quotes
	const getQuotes = async () => {
		try {
			const res = await axios.get(
				'https://api.icndb.com/jokes/random?exclude=[explicit]'
			);
			dispatch({
				type: GET_QUOTES,
				payload: res.data.value.joke
			});
		} catch (err) {
			dispatch({
				type: QUOTE_ERROR,
				payload: err
			});
		}
	};

	return (
		<Context.Provider
			value={{
				quotes: state.quotes,
				getQuotes
			}}>
			{props.children}
		</Context.Provider>
	);
};

export default QuoteState;
