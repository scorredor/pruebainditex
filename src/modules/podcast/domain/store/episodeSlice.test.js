import EpisodeSlice, { initialEpisodeStoreState } from './episodeSlice'

const episodeDummy = {
    id: 1,
    title: 'dummyTitle',
    date: '16/07/2023',
    duration: '15:30',
    description: 'descriptionDummy',
    urlPodcast: 'www.google.com.co'
}

describe('EpisodeSlice testing', () => {
    test('get initial state', () => {
        expect(EpisodeSlice.name).toBe('episode')
        const state = EpisodeSlice.reducer(initialEpisodeStoreState, {})
        expect(state).toEqual(initialEpisodeStoreState)
    })

    test('Set episode', () => {
        const state = EpisodeSlice.reducer(initialEpisodeStoreState, EpisodeSlice.actions.setEpisode(episodeDummy))
        expect(state).toEqual({
            episode: episodeDummy
        })
    })
})