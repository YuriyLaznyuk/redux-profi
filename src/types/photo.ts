export interface IPhoto {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}
export interface PhotoState {
	loading: boolean;
	error: boolean;
	photo: IPhoto[];
	page: number;
	state: boolean;
}

export enum PhotoActionTypes {
	FETCH_PHOTO_RESPONSE = 'FETCH_PHOTO_RESPONSE',
	FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS',
	FETCH_PHOTO_ERROR = 'FETCH_PHOTO_ERROR',
	FETCH_PHOTO_PAGE = 'FETCH_PHOTO_PAGE',
	FETCH_PHOTO_STATE = 'FETCH_PHOTO_STATE',
}
export type FetchPhotoResponse = {
	type: PhotoActionTypes.FETCH_PHOTO_RESPONSE;
};
export type FetchPhotoSuccess = {
	type: PhotoActionTypes.FETCH_PHOTO_SUCCESS;
	payload: IPhoto[];
};
export type FetchPhotoError = {
	type: PhotoActionTypes.FETCH_PHOTO_ERROR;
};
export type FetchPhotoPage = {
	type: PhotoActionTypes.FETCH_PHOTO_PAGE;
};

export type FetchPhotoState = {
	type: PhotoActionTypes.FETCH_PHOTO_STATE;
	payload: boolean;
};

export type PhotoAction =
	| FetchPhotoSuccess
	| FetchPhotoResponse
	| FetchPhotoError
	| FetchPhotoPage
	| FetchPhotoState;
