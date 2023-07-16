import PodcastSlice, { initialPodcastStoreState } from './podcastSlice'

const podcasts170Dummies = {
    feed: {
        author: {
            name: {
                label: 'Sergio Corredor'
            },
            uri: {
                label: 'www.google.com'
            }
        },
        entry: [
            {
                'im:name': {
                    label: 'Sergio'
                },
                id: {
                    attributes: {
                        'im:id': 1
                    }
                },
                'im:artist': {
                    label: 'Sergio',
                    attributes: {
                        ['im:id']: 1
                    }
                },
                'im:image': [{
                    label: 'image',
                    attributes: {
                        height: '170'
                    }
                }],
                summary: {
                    label: 'Cancion 1'
                },
            }
        ],

        icon: {
            label: 'cantante 1'
        },
        id: {
            label: '1',
        },
        link: [

        ],
        rights: {
            label: 'derechos reservadors'
        },
        title: {
            label: 'Titulo'
        },
        updated: {
            label: 'today'
        }
    }
}

const podcasts240Dummies = {
    feed: {
        author: {
            name: {
                label: 'Sergio Corredor'
            },
            uri: {
                label: 'www.google.com'
            }
        },
        entry: [
            {
                'im:name': {
                    label: 'Sergio'
                },
                id: {
                    attributes: {
                        'im:id': 1
                    }
                },
                'im:artist': {
                    label: 'Sergio',
                    attributes: {
                        ['im:id']: 1
                    }
                },
                'im:image': [{
                    label: 'image',
                    attributes: {
                        height: '240'
                    }
                }],
                summary: {
                    label: 'Cancion 1'
                },
            }
        ],

        icon: {
            label: 'cantante 1'
        },
        id: {
            label: '1',
        },
        link: [

        ],
        rights: {
            label: 'derechos reservadors'
        },
        title: {
            label: 'Titulo'
        },
        updated: {
            label: 'today'
        }
    }
}

describe('PodcastSlice testing', () => {

    test('get initial state', () => {
        expect(PodcastSlice.name).toBe('podcast')
        const state = PodcastSlice.reducer(initialPodcastStoreState, {})
        expect(state).toEqual(initialPodcastStoreState)
    })

    test('fetchGetPodcasts', () => {
        const state = PodcastSlice.reducer(initialPodcastStoreState, PodcastSlice.actions.fetchGetPodcasts())
        expect(state.isLoading).toEqual(true)
    })

    test('fetchGetPodcasts', () => {
        const state = PodcastSlice.reducer(initialPodcastStoreState, PodcastSlice.actions.catchError(new Error('hubo un error')))

        expect(state.hasError).toEqual(true)
        expect(state.errorMessage).toEqual('hubo un error')
        expect(state.isLoading).toEqual(false)
    })

    test('getPodcastSuccess with 1700px image', () => {
        const state = PodcastSlice.reducer(initialPodcastStoreState, PodcastSlice.actions.getPodcastSuccess(podcasts170Dummies))
        const podcastsDumiiesLite = [{ 'author': 'Sergio', 'description': 'Cancion 1', 'id': 1, 'img': 'image', 'title': 'Sergio' }]
        expect(state.isLoading).toEqual(false)
        expect(state.podcasts).toEqual(podcastsDumiiesLite)
        expect(state.filteredPodcast).toEqual(podcastsDumiiesLite)
    })

    test('setPodcastSaved', () => {

        const podcastDummy = [{
            id: '1',
            img: '',
            title: 'Titutlo',
            author: 'Sergio',
            description: 'descricion'
        }]

        const state = PodcastSlice.reducer(initialPodcastStoreState, PodcastSlice.actions.setPodcastSaved(podcastDummy))

        expect(state.podcasts).toEqual([...podcastDummy])
        expect(state.filteredPodcast).toEqual([...podcastDummy])
    })

    test('setPodcastEpisodiesSaved', () => {

        const podcastDetailDummy = {
            id: 1,
            title: 'Sergio',
            author: 'sergio',
            description: 'description',
            episodies: [],
            img: '',
            alt: ''
        }

        const state = PodcastSlice.reducer(initialPodcastStoreState, PodcastSlice.actions.setPodcastEpisodiesSaved(podcastDetailDummy))
        expect(state.podcastDetail).toEqual(podcastDetailDummy)
    })

    test('filterPodcast no results', () => {

        const state = PodcastSlice.reducer(initialPodcastStoreState, PodcastSlice.actions.filterPodcast(''))
        expect(state.filteredPodcast).toEqual([])
    })

    test('filterPodcast results', () => {

        const state = PodcastSlice.reducer({
            ...initialPodcastStoreState,
            podcasts: [
                {
                    author: 'THE',
                    description: 'asd',
                    id: 1,
                    img: '',
                    title: 'THE'
                }
            ]
        }, PodcastSlice.actions.filterPodcast('THE'))
        expect(state.filteredPodcast).toEqual([{
            author: 'THE',
            description: 'asd',
            id: 1,
            img: '',
            title: 'THE'
        }])
    })

    test('fetchGetPodcastsDetails', () => {

        const state = PodcastSlice.reducer(initialPodcastStoreState, PodcastSlice.actions.fetchGetPodcastsDetails())
        expect(state.isLoading).toEqual(true)
    })

    test('getPodcastDetailSuccess', () => {

        const episodesDummy = [
            {                
                trackId: 2,
                trackName: 'cancion',
                releaseDate: '2023-07-14T07:01:00Z',
                trackTimeMillis: 1844000,
                description: '',
                episodeUrl: ''
            },
            {                
                trackId: 2,
                trackName: 'cancion',
                releaseDate: '2023-07-14T07:01:00Z',
                trackTimeMillis: 1844000,
                description: '',
                episodeUrl: ''
            }
        ]

        const state = PodcastSlice.reducer({
            ...initialPodcastStoreState,
            podcasts: [
                {
                    author: 'THE',
                    description: 'asd',
                    id: 1,
                    img: '',
                    title: 'THE'
                }
            ]
        }, PodcastSlice.actions.getPodcastDetailSuccess({
            podcastId: 1,
            results: episodesDummy
        }))


        expect(state.podcastDetail).toEqual({'alt': 'THE', 'author': 'THE', 'description': 'asd', 'episodies': [{
                   date: '14/07/2023',
                   description: '',
                   duration: '30:44',
                   id: 2,
                   title: 'cancion',
                   urlPodcast: '',
                 }], 'id': 1, 'img': '', 'title': 'THE'})
        expect(state.isLoading).toEqual(false)
    })

    test('getPodcastSuccess with 240px image', () => {
        const state = PodcastSlice.reducer(initialPodcastStoreState, PodcastSlice.actions.getPodcastSuccess(podcasts240Dummies))
        const podcastsDumiiesLite = [{ 'author': 'Sergio', 'description': 'Cancion 1', 'id': 1, 'img': 'image', 'title': 'Sergio' }]
        expect(state.isLoading).toEqual(false)
        expect(state.podcasts).toEqual(podcastsDumiiesLite)
        expect(state.filteredPodcast).toEqual(podcastsDumiiesLite)
    })
})