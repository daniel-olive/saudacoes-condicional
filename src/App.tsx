import { useState } from 'react';
import { Time } from '../src/components/Time';
import './App.css';

const App = () => {
	return (
		<div className='flex flex-col w-screen h-screen justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500 ...'>
			<Time />
		</div>
	);
};
export default App;
