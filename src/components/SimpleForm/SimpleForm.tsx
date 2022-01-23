import React from 'react';
import './simpleForm.scss';
type Props = {
	show: () => void;
};
const SimpleForm = ({show}: Props) => {
	return (
		<div onClick={(event) => event.stopPropagation()} className='simpleForm'>
			<div onClick={show} className='simpleForm__x'>
				X
			</div>
			<input type='text' placeholder='name' />
			<input type='text' placeholder='email' />
			<button onClick={show}>CREATE</button>
		</div>
	);
};

export default SimpleForm;
