import {PhotoAction, PhotoActionTypes, PhotoState} from '../../types/photo';

const defaultState: PhotoState = {
	loading: false,
	error: false,
	photo: [],
};
export const photoReducer = (state = defaultState, action: PhotoAction) => {
	switch (action.type) {
		case PhotoActionTypes.FETCH_PHOTO_RESPONSE:
			return {...state, loading: true};
		case PhotoActionTypes.FETCH_PHOTO_SUCCESS:
			return {...state, loading: false, error: false, photo: action.payload};
		default:
			return state;
	}
};
