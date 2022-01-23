import React, {useImperativeHandle, useState} from 'react';

type Props = {
	rek: any;
	props?: any;
};

const ModalChild = ({rek}: Props) => {
	const [openModal, setOpenModal] = useState(false);
	useImperativeHandle(
		rek,
		() => ({
			openModal: (value: boolean) => setOpenModal(value),
		}),
		[openModal],
	);
	if (!openModal) {
		return null;
	}
	return (
		<div>
			<h1>child modal component</h1>
			<button onClick={() => setOpenModal(false)}>Close</button>
		</div>
	);
};

export default ModalChild;
