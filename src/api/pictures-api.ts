import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/'
})

export const picturesApi = {
    getPictures() {
        return instance.get<PictureType[]>('photos')
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