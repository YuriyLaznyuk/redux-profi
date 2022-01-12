import {Dispatch} from 'redux';
import {PhotoAction, PhotoActionTypes} from '../../types/photo';
import axios from 'axios';

export const fetchPhoto =
	(page: number) => async (dispatch: Dispatch<PhotoAction>) => {
		try {
			dispatch({type: PhotoActionTypes.FETCH_PHOTO_RESPONSE});
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`,
			);
			dispatch({
				type: PhotoActionTypes.FETCH_PHOTO_SUCCESS,
				payload: response.data,
			});
		} catch (e) {
			dispatch({
				type: PhotoActionTypes.FETCH_PHOTO_ERROR,
			});
		}
	};
export const photoPage = (): PhotoAction => ({
	type: PhotoActionTypes.FETCH_PHOTO_PAGE,
});
export const statePage = (state: boolean): PhotoAction => ({
	type: PhotoActionTypes.FETCH_PHOTO_STATE,
	payload: state,
});
