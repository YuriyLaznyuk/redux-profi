import React from 'react';
import './app.scss';
import im1 from './assets/icons/favicon.png';
import NBU from './assets/icons/vector.svg';

const App: React.FC = () => {
	const a = 10;
	return (
		<div className='wrapper'>
			<h1>Redux Profi {a}</h1>

			<div className='wrapper__img'>
				<img src={im1} alt='nbu' width={50} />

				<NBU />
			</div>
		</div>
	);
};

export default App;
