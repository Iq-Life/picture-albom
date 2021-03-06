import {
    initialStateType,
    pictureReducer,
    removePicturesAC,
    setCurrentPageAC
} from "./picture-reducer";

let startState: initialStateType

beforeEach(() => {
    startState = {
        pictures: [
            {
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            },
            {
                "albumId": 1,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "https://via.placeholder.com/600/771796",
                "thumbnailUrl": "https://via.placeholder.com/150/771796"
            },
            {
                "albumId": 1,
                "id": 3,
                "title": "officia porro iure quia iusto qui ipsa ut modi",
                "url": "https://via.placeholder.com/600/24f355",
                "thumbnailUrl": "https://via.placeholder.com/150/24f355"
            },
            {
                "albumId": 2,
                "id": 4,
                "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                "url": "https://via.placeholder.com/600/d32776",
                "thumbnailUrl": "https://via.placeholder.com/150/d32776"
            },
            {
                "albumId": 2,
                "id": 5,
                "title": "natus nisi omnis corporis facere molestiae rerum in",
                "url": "https://via.placeholder.com/600/f66b97",
                "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
            },
            {
                "albumId": 2,
                "id": 6,
                "title": "accusamus ea aliquid et amet sequi nemo",
                "url": "https://via.placeholder.com/600/56a8c2",
                "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
            },
            {
                "albumId": 3,
                "id": 7,
                "title": "officia delectus consequatur vero aut veniam explicabo molestias",
                "url": "https://via.placeholder.com/600/b0f7cc",
                "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
            },
            {
                "albumId": 3,
                "id": 8,
                "title": "aut porro officiis laborum odit ea laudantium corporis",
                "url": "https://via.placeholder.com/600/54176f",
                "thumbnailUrl": "https://via.placeholder.com/150/54176f"
            },
            {
                "albumId": 3,
                "id": 9,
                "title": "qui eius qui autem sed",
                "url": "https://via.placeholder.com/600/51aa97",
                "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
            },
            {
                "albumId": 4,
                "id": 10,
                "title": "beatae et provident et ut vel",
                "url": "https://via.placeholder.com/600/810b14",
                "thumbnailUrl": "https://via.placeholder.com/150/810b14"
            }
        ],
        albums: [
                {
                    userId: 1,
                    id: 1,
                    title: '111'
                },
                {
                userId: 2,
                id: 2,
                title: '222'
            }
            ],
        currentAlbum: 0,
        start: 0,
        limit: 20,
        totalPicturesCount: 5000,
        currentPage: 1
    }
})

test('should be change current page and the initial value', () => {

    const action = setCurrentPageAC(3)

    const endState = pictureReducer(startState, action)

    expect(endState.currentPage).toBe(3)
    expect(endState.start).toBe(40)
})
test('should be remove current picture', () => {

    const action = removePicturesAC(8)

    const endState = pictureReducer(startState, action)

    expect(endState.pictures.length).toBe(9)
})
