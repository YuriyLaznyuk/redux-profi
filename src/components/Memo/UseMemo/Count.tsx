import React from 'react';
type countProps = {
	id: number;
	value: number;
};

const render: Render = {
	count1: 0,
	count2: 0,
};

type Render = {
	count1: number;
	count2: number;
};
const Count = ({id, value}: countProps) => {
	console.warn(`Count${id} render1: ${id === 1 && ++render.count1}`);
	console.warn(`Count${id} render2: ${id === 2 && ++render.count2}`);
	return (
		<div>
			<h1>{value}</h1>
		</div>
	);
};

export default Count;
