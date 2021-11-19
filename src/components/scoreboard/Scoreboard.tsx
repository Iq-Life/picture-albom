import React from "react";
import style from "./Scoreboard.module.scss";
import {PictureType} from "../../api/pictures-api";
import {ActionAreaCard} from "./ActionAreaCard";
import {NavigationBar} from "../navigationBar/NavigationBar";


export const Scoreboard: React.FC<scoreboardType> = ({
                                                         pictures, limit, start, setCurrentAlbum,
                                                         totalPicturesCount, setCurrentPage, currentPage,
                                                         removePictures
                                                     }) => {

    const content = pictures.map((picture) => (
        <div className={style.tileFragment} key={picture.id}>
            <button className={style.deleteIcon} onClick={() => removePictures(picture.id)}>
                x
            </button>
            <div className={style.containerActionAreaCard}><ActionAreaCard id={picture.id} thumbnailUrl={picture.thumbnailUrl} text={picture.title}/></div>
        </div>
    ))


    return (
        <div className={style.scoreboard}>
           <NavigationBar
               limit={limit}
               totalPicturesCount={totalPicturesCount}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
               setCurrentAlbum={setCurrentAlbum}
           />
            <div className={style.tile}>
                {content}
            </div>
        </div>
    )
}
//type
type scoreboardType = {
    pictures: PictureType[]
    limit: number
    start: number
    totalPicturesCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setCurrentAlbum: (albumId: number) => void
    removePictures: (picturesId: number) => void
}