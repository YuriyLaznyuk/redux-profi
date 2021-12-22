import React, {useCallback, useEffect, useRef, useState} from 'react';
import './useRef.scss';

const UseRef = () => {
	// let timer: NodeJS.Timer;

	const [numbers, setNumber] = useState<Array<number>>([
		1, 2, 3, 4, 5, 6, 7, 8, 9,
	]);
	const ulRef = useRef<HTMLUListElement>(null);
	const timerRef = useRef();
	const numbersRef = useRef(null);
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	numbersRef.current = numbers;
	// console.log(ulRef);
	// console.log(numbers);
	const addNumber = (): void => {
		setNumber((numbers) => [...numbers, numbers[numbers.length - 1] + 1]);
	};

	const handler = useCallback(() => {
		// console.log('Scroll', numbersRef.current);
	}, []);

	const removeScroll = () => {
		if (ulRef && ulRef.current) {
			ulRef.current.removeEventListener('scroll', handler);
		} else {
			return false;
		}
	};

	const addedScroll = () => {
		if (ulRef && ulRef.current) {
			ulRef.current.addEventListener('scroll', handler);
		} else {
			return false;
		}
	};

	const start = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		timerRef.current = setInterval(addNumber, 1000);
	};
	const stop = () => {
		console.log(timerRef);
		clearInterval(timerRef.current);
	};
	useEffect(() => {
		if (ulRef && ulRef.current) {
			ulRef.current.addEventListener('scroll', handler);
		}
		// console.log(ulRef);
	});

	return (
		<div className='UseRef'>
			<ul className='UseRef__list' ref={ulRef}>
				{numbers.map((elem) => (
					<li className='UseRef__list-item' key={elem}>
						{elem}
					</li>
				))}
			</ul>
			<button onClick={addNumber}>Add Number</button>
			<button onClick={removeScroll}>No scroll</button>
			<button onClick={addedScroll}>Add scroll</button>
			<button onClick={start}>Start</button>
			<button onClick={stop}>Stop</button>
		</div>
	);
};

export default UseRef;
