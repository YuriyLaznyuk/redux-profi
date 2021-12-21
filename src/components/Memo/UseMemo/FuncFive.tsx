import React, {useMemo} from 'react';
let renderCount = 0;
let renderFunc = 0;
type propFive = {
	value: number;
};
const FuncFive = ({value}: propFive) => {
	console.log(`renderCount: ${++renderCount}`);
	const getResult = useMemo<string>(() => {
		console.log(`renderFunc: ${++renderFunc}`);
		let i = 0;
		while (i < 600000000) {
			i++;
		}
		return value === 5 ? 'Digit Five' : 'No Five';
	}, [value]);
	return (
		<div>
			<h3>{getResult}</h3>
		</div>
	);
};

export default FuncFive;
