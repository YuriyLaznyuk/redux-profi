import React, {useCallback, useState} from 'react';
import './useCallSack.scss';
let countRender = 0;
export default React.memo(function UseCallBack() {
	const [count, setCount] = useState<number>(0);
	const onPlus = () => {
		setCount((count) => count + 1);
	};
	const onMinus = useCallback(() => {
		setCount((count) => count - 1);
	}, []);
	console.log('render UseCallBack', ++countRender);
	return (
		<div className='UseCallBack'>
			<h3>{count}</h3>
			<div className='UseCallBack__buttons'>
				<button className='UseCallBack__buttons-btn' onClick={() => onPlus()}>
					PLUS
				</button>
				<button className='UseCallBack__buttons-btn' onClick={() => onMinus()}>
					MINUS
				</button>
			</div>
		</div>
	);
});
