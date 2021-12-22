import React, {useMemo} from 'react';

let renderCount = 0;
let renderFunc = 0;
type propFive = {
	value: number;
};

export default React.memo<propFive>(function FuncFive({value}: propFive) {
	console.log(`renderComponentFuncFive: ${++renderCount}`);

	const logic = (value: number) => {
		console.log(`renderFunc: ${++renderFunc}`);
		let i = 0;
		while (i < 600000000) {
			i++;
		}
		return value === 5 ? 'Digit Five' : 'No Five';
	};
	const getResult = useMemo(() => {
		return logic(value);
	}, [value]);
	return (
		<div>
			<h3>{getResult}</h3>
		</div>
	);
});
