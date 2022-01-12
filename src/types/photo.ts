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
}

export enum PhotoActionTypes {
	FETCH_PHOTO_RESPONSE = 'FETCH_PHOTO_RESPONSE',
	FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS',
	FETCH_PHOTO_ERROR = 'FETCH_PHOTO_ERROR',
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

export type PhotoAction =
	| FetchPhotoSuccess
	| FetchPhotoResponse
	| FetchPhotoError;
