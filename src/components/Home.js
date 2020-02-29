import React, { useContext, useEffect } from 'react';
import Context from '../context/context';
import Spinner from './Spinner';
import img from './img1.jpg';

export default function Home() {
	const quoteContext = useContext(Context);
	const { quotes, getQuotes, loading } = quoteContext;
	useEffect(() => {
		getQuotes();
		console.log(quotes);
		// eslint-disable-next-line
	}, []);
	if (quotes === '' || loading === true) {
		return <Spinner />;
	}
	return (
		<div id='quote-box' className='container'>
			<h1 className='title'>Random Quote Machine</h1>
			<div className='card'>
				<img src={img} alt='random image' className='card--img' />
				{quotes !== '' && loading === true ? (
					<Spinner />
				) : (
					<p id='text' className='card--text'>
						{quotes}
					</p>
				)}

				<blockquote id='author' className='card--author'>
					-Chuck Norris
				</blockquote>
				<div className='card--buttons'>
					<button
						id='new-quote'
						className='card--button btn-quote'
						onClick={getQuotes}>
						Get a new quote
					</button>
					<a
						href={`https://twitter.com/intent/tweet?text=${quotes}`}
						id='tweet-quote'
						className='card--button btn-twitter'>
						<i class='fab fa-twitter' aria-hidden='true'></i> Tweet Quote
					</a>
				</div>
			</div>
		</div>
	);
}
