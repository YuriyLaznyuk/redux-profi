import React, {useRef} from 'react';
import ModalChild from './ModalChild';

const Modal = () => {
	const childRef = useRef(null);
	const handleOpenModal = (value: boolean) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		childRef.current?.openModal(value);
	};

	return (
		<div>
			<h1>Parent modal</h1>
			<ModalChild rek={childRef} />
			<button onClick={() => handleOpenModal(true)}>Open modal</button>
		</div>
	);
};

export default Modal;
