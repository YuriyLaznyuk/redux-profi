export enum UserActionType {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface UserState {
	users: any[];
	loading: boolean;
	error: null | string;
}

interface FetchUsersAction {
	type: UserActionType.FETCH_USERS;
}

interface FetchUsersSuccessAction {
	type: UserActionType.FETCH_USERS_SUCCESS;

	payload: any[];
}

interface FetchUsersErrorAction {
	type: UserActionType.FETCH_USERS_ERROR;
	payload: string;
}
// interface UserAction {
// 	type: string;
// 	payload?: any;
// }

export type UserAction =
	| FetchUsersAction
	| FetchUsersSuccessAction
	| FetchUsersErrorAction;
