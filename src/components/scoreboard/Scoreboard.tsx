import {FC, memo, useCallback, useEffect} from "react";
import style from "./Scoreboard.module.scss";
import {ActionAreaCard} from "./actionAreaCard/ActionAreaCard";
import {NavigationBar} from "../navigationBar/NavigationBar";
import {useDispatch, useSelector} from "react-redux";
import {
    getAlbums,
    getCurrentAlbum, getCurrentPage, getLimit,
    getPictures, getStart, getTotalPicturesCount
} from "../../redux/reducers/getPictures";
import {
    fetchAlbumPictures, fetchAlbums, fetchPictures,
    removePicturesAC, setCurrentPageAC
} from "../../redux/picture-reducer";


export const Scoreboard: FC = memo(() => {
console.log('render Scoreboard')
    const pictures = useSelector(getPictures)
    const albums = useSelector(getAlbums)
    const limit = useSelector(getLimit)
    const start = useSelector(getStart)
    const totalPicturesCount = useSelector(getTotalPicturesCount)
    const currentPage = useSelector(getCurrentPage)
    const currentAlbum = useSelector(getCurrentAlbum)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch])

    useEffect(() => {
        if (currentAlbum) {
            dispatch(fetchAlbumPictures(currentAlbum, start, limit))
        } else {
            dispatch(fetchPictures(start, limit))
        }
    }, [currentAlbum, start, limit, dispatch])

//dispatch
    const setCurrentPage = useCallback((page: number) => {
        dispatch(setCurrentPageAC(page))
    }, [dispatch])
    const setCurrentAlbum = useCallback((albumId: number, start: number, limit: number) => {
        dispatch(fetchAlbumPictures(albumId, start, limit))
    }, [dispatch])
    const removePictures = useCallback((picturesId:number)=>{
        dispatch(removePicturesAC(picturesId))
    }, [dispatch])

    const content = pictures.map((picture) => (
        <div className={style.tileFragment} key={picture.id}>
            <button className={style.deleteIcon} onClick={() => removePictures(picture.id)}>
                x
            </button>
            <div className={style.containerActionAreaCard}>
                <ActionAreaCard id={picture.id}
                                thumbnailUrl={picture.thumbnailUrl}
                                fullImageUrl={picture.url}
                                text={picture.title}/>
            </div>
        </div>
    ))

    return (
        <div className={style.scoreboard}>
            <NavigationBar
                limit={limit}
                totalPicturesCount={totalPicturesCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                albums={albums}
                setCurrentAlbum={(albumId) => setCurrentAlbum(albumId, start, limit)}
            />
            <div className={style.tile}>
                {content}
            </div>
        </div>
    )
})