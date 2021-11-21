import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/'
})

export const picturesApi = {

    getPicturesInPortions(start:number, limit:number) {
        return instance.get<PictureType[]>(`photos?_start=${start}&_limit=${limit}`)
    },
    getAlbumPictures(albumId:number, start:number, limit:number){
        return instance.get<PictureType[]>(`albums/${albumId}/photos?_start=${start}&_limit=${limit}`)
    },
    getAlbums() {
        return instance.get<AlbumsType[]>(`albums`)
    }
}



//types & enum
export type PictureType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
export type AlbumsType ={
    userId: number
    id: number
    title: string
}