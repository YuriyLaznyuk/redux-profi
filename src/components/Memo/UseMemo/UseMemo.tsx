import React, {useState} from 'react';
import './useMemo.scss';
import Count from './Count';
import FuncFive from './FuncFive';

const UseMemo = () => {
	const [count1, setCount1] = useState<number>(0);
	const [count2, setCount2] = useState<number>(0);
	return (
		<div className='useMemo'>
			<div className='useMemo__count'>
				<button
					className='useMemo__count-btn'
					onClick={() => setCount1(count1 + 1)}>
					Count1
				</button>
				{/*<span>{count1}</span>*/}
				<Count id={1} value={count1} />
			</div>
			<div className='useMemo__count'>
				<button
					className='useMemo__count-btn'
					onClick={() => setCount2(count2 + 1)}>
					Count2
				</button>
				{/*<span>{count1 > 5 ? count2 : 'count<5'}</span>*/}
				<Count id={2} value={count2} />
			</div>
			<FuncFive value={count2} />
		</div>
	);
};

export default UseMemo;
