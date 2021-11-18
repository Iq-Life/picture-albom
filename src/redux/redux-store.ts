import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {ActionTypes, pictureReducer} from "./picture-reducer";




export let reducersBatch = combineReducers({
    pictures: pictureReducer
});

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

//types
export type ThunksType = ThunkAction<void, AppStateType, unknown, ActionTypes>;
export type AppStateType = ReturnType<typeof reducersBatch>


export default store
