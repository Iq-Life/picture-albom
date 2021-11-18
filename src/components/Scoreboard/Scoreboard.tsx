import React, {useEffect} from "react";
import style from "./Scoreboard.module.scss";
import {SelectAutoWidth} from "../Select/SelectAutoWidth";
import {Pagination} from "@mui/material";
import {ActionAreaCard} from "./ActionAreaCard";
import {PictureType} from "../../api/pictures-api";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {fetchPictures} from "../../redux/picture-reducer";


export const Scoreboard: React.FC = () => {
    const pictures = useSelector<AppStateType, PictureType[]>(state => state.pictures)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPictures())
    },[])


    const content = pictures.map((picture)=>(
        <div key={picture.id}><ActionAreaCard thumbnailUrl={picture.thumbnailUrl} text={picture.title}/></div>
        ))


return (
    <div className={style.scoreboard}>
        <div className={style.navigationBar}>
            <div>
                <SelectAutoWidth/>
            </div>
            <div>
                <Pagination count={10} color={"primary"} variant="outlined" shape="rounded" />
            </div>
        </div>
        <div className={style.tile}>
            {content}
        </div>
    </div>
)
}