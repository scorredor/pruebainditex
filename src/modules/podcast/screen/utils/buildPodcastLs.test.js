/* eslint-disable no-useless-escape */
import { buildPodcastLs } from './buildPodcastLs'

describe('buildPodcastLs tsting', () => {
    test('', () => {
        const test = buildPodcastLs({nombre: 'hola'})
        expect(test).toContain('|||{\"nombre\":\"hola\"}')
    })
})