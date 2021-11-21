import {AlbumsType, picturesApi, PictureType} from "../api/pictures-api";
import {ThunksType} from "./redux-store";


let initialState: initialStateType = {
    pictures: [],
    albums: [],
    currentAlbum: 0,
    start: 0,
    limit: 20,
    totalPicturesCount: 0,
    currentPage: 1
}

export const pictureReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "SET_PICTURES": {
            return {...state, pictures: action.data.map((picture) => ({...picture}))}
        }
        case "SET_ALBUMS": {
            return {...state, albums: action.albums}
        }
        case "REMOVE_PICTURES": {
            return {
                ...state, pictures: [...state.pictures].filter(
                    (pictures) => pictures.id !== action.picturesId)
            }
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage, start: (action.currentPage - 1) * state.limit}
        }
        case "TOTAL_PICTURES_COUNT": {
            return {...state, totalPicturesCount: action.totalPicturesCount}
        }
        case "SET_SELECT_ALBUM": {
            return {...state, currentAlbum: action.setCurrentAlbum, currentPage: 1, start: 0}
        }
        default:
            return state
    }
}
//action
export const setPictureAC = (data: PictureType[]) => {
    return {type: "SET_PICTURES", data} as const
}
export const removePicturesAC = (picturesId: number) => {
    return {type: "REMOVE_PICTURES", picturesId} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: "SET_CURRENT_PAGE", currentPage} as const
}
export const totalPicturesCountAC = (totalPicturesCount: number) => {
    return {type: "TOTAL_PICTURES_COUNT", totalPicturesCount} as const
}
export const setSelectedAlbumAC = (currentAlbum: number) => {
    return {type: "SET_SELECT_ALBUM", setCurrentAlbum: currentAlbum} as const
}
export const setAlbumsAC = (albums: AlbumsType[]) => {
    return {type: "SET_ALBUMS", albums} as const
}

//thunks
export const fetchPictures = (start: number, limit: number): ThunksType => (dispatch) => {
    picturesApi.getPicturesInPortions(start, limit).then((res) => {
        dispatch(totalPicturesCountAC(Number(res.headers["x-total-count"])))
        dispatch(setPictureAC(res.data))
    })
};
export const fetchAlbumPictures = (albumId: number, start: number, limit: number): ThunksType => (dispatch, getState) => {
    picturesApi.getAlbumPictures(albumId, start, limit).then((res) => {
        dispatch(totalPicturesCountAC(Number(res.headers["x-total-count"])))
        dispatch(setPictureAC(res.data))
        const currentAlbumId = getState().pictureReducer.currentAlbum;
        if (albumId !== currentAlbumId)
            dispatch(setSelectedAlbumAC(albumId))
    })
}
export const fetchAlbums = (): ThunksType => (dispatch, getState) => {
    picturesApi.getAlbums().then((res) => {
        console.log(res.data)
        dispatch(setAlbumsAC(res.data))
    })
}
//types
export type ActionTypes =
    ReturnType<typeof setPictureAC> | ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof totalPicturesCountAC> | ReturnType<typeof removePicturesAC> |
    ReturnType<typeof setSelectedAlbumAC> | ReturnType<typeof setAlbumsAC>

export type initialStateType = {
    pictures: PictureType[]
    albums: AlbumsType[]
    currentAlbum: number
    start: number
    limit: number
    totalPicturesCount: number
    currentPage: number
}