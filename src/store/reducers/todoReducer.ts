import {TodoAction, TodoState, TodoActionTypes} from '../../types/todo';
export const todoReducer = (
	state = initState,
	action: TodoAction,
): TodoState => {
	switch (action.type) {
		case TodoActionTypes.FETCH_TODOS:
			return {...state, loading: true};
		case TodoActionTypes.FETCH_TODOS_ERROR:
			return {...state, loading: false, error: action.payload};
		case TodoActionTypes.FETCH_TODOS_SUCCESS:
			return {...state, loading: false, todos: action.payload};
		case TodoActionTypes.SET_TODOS_PAGE:
			return {...state, page: action.payload};
		default:
			return state;
	}
};
const initState: TodoState = {
	error: null,
	limit: 10,
	loading: false,
	page: 1,
	todos: [],
};
