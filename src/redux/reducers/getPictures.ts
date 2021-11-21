import {AppStateType} from "../redux-store";
import {AlbumsType, PictureType} from "../../api/pictures-api";

export const getPictures = (state: AppStateType): PictureType[] => state.pictureReducer.pictures
export const getLimit = (state: AppStateType): number => state.pictureReducer.limit
export const getStart = (state: AppStateType): number => state.pictureReducer.start
export const getTotalPicturesCount = (state: AppStateType): number=> state.pictureReducer.totalPicturesCount
export const getCurrentPage = (state: AppStateType): number => state.pictureReducer.currentPage
export const getCurrentAlbum = (state: AppStateType): number=> state.pictureReducer.currentAlbum
export const getAlbums = (state: AppStateType): AlbumsType[]=> state.pictureReducer.albums