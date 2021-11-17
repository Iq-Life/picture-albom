import React from "react";
import style from "./Scoreboard.module.scss";
import {SelectAutoWidth} from "../Select/SelectAutoWidth";
import {Pagination} from "@mui/material";
import {ActionAreaCard} from "./ActionAreaCard";

export const Scoreboard: React.FC = () => {
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
            <ActionAreaCard/>
            <ActionAreaCard/>
            <ActionAreaCard/>
            <ActionAreaCard/>
            <ActionAreaCard/>
            <ActionAreaCard/>
        </div>
    </div>
)
}