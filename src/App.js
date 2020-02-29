import React from 'react';
import './App.scss';
// components
import Home from './components/Home';

// state
import State from './context/state';
function App() {
	return (
		<State>
			<div className='App'>
				<Home />
			</div>
		</State>
	);
}

export default App;
