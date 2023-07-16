import { buildRowsEpisodies } from './episodiesRows'


const rowDummies = [
    {
        id: 1,
        title: 'Titulo 1',
        date: '16/07/2023',
        duration: '15:30',
        description: 'Description 1',
        urlPodcast: 'url 1'
    },
    {
        id: 2,
        title: 'Titulo 2',
        date: '16/07/2023',
        duration: '15:30',
        description: 'Description 2',
        urlPodcast: 'url 2'
    }
]

describe('episodiesRows', () => {
    test('build valid rows', () => {
        const test = buildRowsEpisodies(rowDummies)

        expect(test).toEqual( [{'date': '16/07/2023', 'duration': '15:30', 'id': 1, 'title': 'Titulo 1'}, {'date': '16/07/2023', 'duration': '15:30', 'id': 2, 'title': 'Titulo 2'}])
    })
})