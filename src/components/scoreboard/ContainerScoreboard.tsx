import React, {useCallback, useEffect} from "react";
import {PictureType} from "../../api/pictures-api";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {fetchAlbumPictures, fetchPictures, removePicturesAC, setCurrentPageAC} from "../../redux/picture-reducer";
import {Scoreboard} from "./Scoreboard";


export const ContainerScoreboard: React.FC = () => {

    const pictures = useSelector<AppStateType, PictureType[]>(state => state.pictureReducer.pictures)
    const limit = useSelector<AppStateType, number>(state => state.pictureReducer.limit)
    const start = useSelector<AppStateType, number>(state => state.pictureReducer.start)
    const totalPicturesCount = useSelector<AppStateType, number>(state => state.pictureReducer.totalPicturesCount)
    const currentPage = useSelector<AppStateType, number>(state => state.pictureReducer.currentPage)
    const currentAlbum = useSelector<AppStateType, number>(state => state.pictureReducer.currentAlbum)

    const dispatch = useDispatch()

    useEffect(() => {
        if (currentAlbum) {
            dispatch(fetchAlbumPictures(currentAlbum, start, limit))
            console.log("if true")
        } else {
            dispatch(fetchPictures(start, limit))
            console.log("if false")
        }
    }, [currentAlbum, start, limit, dispatch])

//dispatch
    const setCurrentPage = useCallback((page: number) => {
        console.log("setCurrentPage : "+page)
        dispatch(setCurrentPageAC(page))
    }, [dispatch])
    const setCurrentAlbum = useCallback((albumId: number, start: number, limit: number) => {
        console.log("setCurrentAlbum : "+albumId)
        dispatch(fetchAlbumPictures(albumId, start, limit))
    }, [dispatch])
    const removePictures = useCallback((picturesId:number)=>{
        dispatch(removePicturesAC(picturesId))
    }, [dispatch])

    return (
        <Scoreboard
            pictures={pictures}
            limit={limit}
            start={start}
            totalPicturesCount={totalPicturesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setCurrentAlbum={(albumId) => setCurrentAlbum(albumId, start, limit)}
            removePictures={removePictures}
        />
    )
}