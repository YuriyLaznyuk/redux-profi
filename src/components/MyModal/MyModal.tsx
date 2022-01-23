import React from 'react';
import './myModal.scss';
interface IProps {
	show: () => void;
	children?: JSX.Element | JSX.Element[] | string | string[];
}
const MyModal = ({show, children}: IProps) => {
	return (
		<div onClick={show} className='myModal'>
			<div>
				<h1>My Modal</h1>
				{children}
			</div>
		</div>
	);
};

export default MyModal;
