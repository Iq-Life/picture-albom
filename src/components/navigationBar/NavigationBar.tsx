import {FC, memo} from "react";
import style from './NavigationBar.module.scss'
import {PaginationRounded} from "./pagination/PaginationRounded";
import {ControlledSelect} from "./select/ControlledSelect";
import {AlbumsType} from "../../api/pictures-api";


export const NavigationBar: FC<NavigationBarType> = memo(({
                                             limit,  setCurrentAlbum, totalPicturesCount,
                                                setCurrentPage, currentPage,albums
                                                     }) => {

    let pagesCount = Math.ceil(totalPicturesCount / limit)
    console.log('render NavigationBar')
    return (
        <div className={style.navigationBar}>
            <div>
                <ControlledSelect setCurrentAlbum={setCurrentAlbum} albums={albums}/>
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
})
//type
type NavigationBarType = {
    limit: number
    totalPicturesCount: number
    currentPage: number
    albums: AlbumsType[]
    setCurrentPage: (page: number) => void
    setCurrentAlbum: (albumId: number) => void
}