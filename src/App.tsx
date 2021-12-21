import React from 'react';
import './app.scss';
import im1 from './assets/icons/favicon.png';
import NBU from './assets/icons/vector.svg';
import Main from './components/Main/Main';
import UseMemo from './components/Memo/UseMemo/UseMemo';

const App: React.FC = () => {
	const a = 10;
	return (
		<div className='wrapper'>
			<h1>React 17 and TypeScript 4 App! {a}</h1>

			<div className='wrapper__img'>
				<img src={im1} alt='nbu' width={50} />

				<NBU />
			</div>
			<Main />
			<UseMemo />
		</div>
	);
};

export default App;
