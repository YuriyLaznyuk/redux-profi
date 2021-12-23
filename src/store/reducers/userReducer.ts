import {UserState, UserAction, UserActionType} from '../../types/user';

const initialState: UserState = {
	users: [],
	loading: false,
	error: null,
};

export const userReducer = (
	state = initialState,
	action: UserAction,
): UserState => {
	switch (action.type) {
		case UserActionType.FETCH_USERS:
			return {...state, loading: true, error: null, users: []};
		case UserActionType.FETCH_USERS_ERROR:
			return {...state, loading: false, error: action.payload, users: []};
		case UserActionType.FETCH_USERS_SUCCESS:
			return {...state, loading: false, error: null, users: action.payload};
		default:
			return state;
	}
};
