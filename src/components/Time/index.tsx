import { useEffect } from 'react';

export const Time = () => {
	const TimeHora = Intl.DateTimeFormat('pt-BR', {
		timeStyle: 'short',
		hour12: false,
	}).format();

	const hour = new Date().getHours();

	let greeting = '';

	if (hour >= 0 && hour < 12) {
		greeting = 'Bom dia 😃';
	} else if (hour >= 12 && hour < 18) {
		greeting = 'Boa tarde 😎';
	} else if (hour >= 18 && hour <= 23) {
		greeting = 'Boa noite 😴';
	}

	return (
		<>
			<span className='text-9xl text-white'>{TimeHora}</span>
			<span className='text-5xl font-bold mt-10'>{greeting}</span>
		</>
	);
};
