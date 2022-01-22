import React, {useEffect} from 'react';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import {useAction} from '../../../hooks/useAction';

const TodoList = () => {
	const {fetchTodos, setTodoPage} = useAction();
	const {error, todos, limit, loading, page} = useTypedSelector(
		(state) => state.todo,
	);
	const pages = [1, 2, 3, 4, 5];
	useEffect(() => {
		fetchTodos(page, limit);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	if (loading) {
		return <h1>...loading</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<div>
			{todos.map((todo) => (
				<div key={todo.id}>
					{todo.id}--{todo.title}
				</div>
			))}
			<div style={{display: 'flex'}}>
				{pages.map((p) => (
					<div
						onClick={() => setTodoPage(p)}
						key={p}
						style={{
							border: p === page ? '2px solid green' : '1px solid gray',
							padding: 10,
						}}>
						{p}
					</div>
				))}
			</div>
		</div>
	);
};

export default TodoList;
