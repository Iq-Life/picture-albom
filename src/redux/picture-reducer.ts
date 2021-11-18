import {picturesApi, PictureType} from "../api/pictures-api";
import {ThunksType} from "./redux-store";


let initialState: PictureType[] = []

export const pictureReducer = (state = initialState, action: ActionTypes): PictureType[] => {
    switch (action.type) {
        case "SET_PICTURES":
            return action.data.map((picture) => ({...picture}))
        default:
            return state
    }
}
//action
export const getPictureAC = (data: PictureType[]) => {
    return {type: "SET_PICTURES", data} as const
}

//thunk
export const fetchPictures = (): ThunksType => (dispatch) => {
    picturesApi.getPictures().then((res) => {
        dispatch(getPictureAC(res.data))
    })
};
//type
export type ActionTypes = ReturnType<typeof getPictureAC>
