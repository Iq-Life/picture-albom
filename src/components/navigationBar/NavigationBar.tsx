import React from "react";
import style from './NavigationBar.module.scss'
import {PaginationRounded} from "../pagination/PaginationRounded";
import {ControlledSelect} from "../select/ControlledSelect";


export const NavigationBar: React.FC<NavigationBarType> = ({
                                             limit,  setCurrentAlbum, totalPicturesCount,
                                                setCurrentPage, currentPage

                                                     }) => {


    let pagesCount = Math.ceil(totalPicturesCount / limit)

    return (
        <div className={style.navigationBar}>
            <div>
                <ControlledSelect setCurrentAlbum={setCurrentAlbum}/>
            </div>
            <div>
                <PaginationRounded
                    setCurrentPage={(page) => (setCurrentPage(page))}
                    currentPage={currentPage}
                    pagesCount={pagesCount}
                />
            </div>
        </div>
    )
}
//type
type NavigationBarType = {
    limit: number
    totalPicturesCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setCurrentAlbum: (albumId: number) => void
}