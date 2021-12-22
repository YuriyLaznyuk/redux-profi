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
export default React.memo(function Count({id, value}: countProps) {
	console.log(
		`Count${id} render: ${id === 1 ? ++render.count1 : ++render.count2}`,
	);
	return (
		<div>
			<h1>
				{value}: {id}
			</h1>
		</div>
	);
});
