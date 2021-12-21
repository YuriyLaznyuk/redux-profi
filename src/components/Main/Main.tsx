import React from 'react';

const Main = () => {
	return (
		<div>
			<h2>Hello</h2>
			<button
				className='main__btn'
				disabled={true}
				type='button'
				title='super'
				value='Bomba'>
				Click
			</button>
			<button
				className='main__btn'
				disabled={false}
				type='button'
				title='hello'>
				Hello
			</button>
		</div>
	);
};

export default Main;
