import {PhotoAction, PhotoActionTypes, PhotoState} from '../../types/photo';

const defaultState: PhotoState = {
	loading: false,
	error: false,
	photo: [],
	page: 1,
	state: true,
};
export const photoReducer = (state = defaultState, action: PhotoAction) => {
	switch (action.type) {
		case PhotoActionTypes.FETCH_PHOTO_RESPONSE:
			return {...state, loading: true};
		case PhotoActionTypes.FETCH_PHOTO_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				photo: [...state.photo, ...action.payload],
			};
		case PhotoActionTypes.FETCH_PHOTO_PAGE:
			return {...state, page: state.page + 1};
		case PhotoActionTypes.FETCH_PHOTO_STATE:
			return {...state, state: action.payload};
		default:
			return state;
	}
};
