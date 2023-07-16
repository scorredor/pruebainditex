import { render, screen } from '@testing-library/react'
import PodcastPage from '.'
import { Provider } from 'react-redux';
import PodcastSlice from '../../domain/store/podcastSlice';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { useValidateExistingData } from '../../domain/hooks/useValidateExistingData';

jest.mock('../../domain/hooks/useValidateExistingData')

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            podcasts: PodcastSlice.reducer,
        },
        preloadedState: initialState         
    })
}

describe('PodcastPage testing', () => {

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Rendering page with podcasts', () => {

        useValidateExistingData.mockReturnValue({
            search: false,
            validateLocalStorage: jest.fn(),
            saveDataLocalStorage: jest.fn(),
            dataSaved: [
                {
                    author: 'THE',
                    description: 'asd',
                    id: 1,
                    img: '',
                    title: 'THE'
                }
            ]
        })

        const mockStore = getMockStore({
            filteredPodcast: [
                {
                    author: 'THE',
                    description: 'asd',
                    id: 1,
                    img: '',
                    title: 'THE'
                }
            ],
            podcastDetail: null
        }
        )

        render(
            <MemoryRouter >
                <Provider store={mockStore}>
                    <PodcastPage />
                </Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('THE')).toBeTruthy()
    })

    test('Rendering page no podcasts', () => {
        const mockStore = getMockStore([])

        useValidateExistingData.mockReturnValue({
            search: true,
            validateLocalStorage: jest.fn(),
            saveDataLocalStorage: jest.fn(),
            dataSaved: [
                {
                    author: 'THE',
                    description: 'asd',
                    id: 1,
                    img: '',
                    title: 'THE'
                }
            ]
        })

        render(
            <MemoryRouter >
                <Provider store={mockStore}>
                    <PodcastPage />
                </Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('THE')).toBeTruthy()
    })

    test('Rendering page with data in localstorage', () => {
        const mockStore = getMockStore({
            filteredPodcast: [
                {
                    author: 'THE',
                    description: 'asd',
                    id: 1,
                    img: '',
                    title: 'THE'
                }
            ],
            podcastDetail: null
        }
        )

        useValidateExistingData.mockReturnValue({
            search: false,
            validateLocalStorage: jest.fn(),
            saveDataLocalStorage: jest.fn(),
            dataSaved: [
                {
                    author: 'THE',
                    description: 'asd',
                    id: 1,
                    img: '',
                    title: 'THE'
                }
            ]
        })

        render(
            <MemoryRouter >
                <Provider store={mockStore}>
                    <PodcastPage />
                </Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('THE')).toBeTruthy()
    })

    test('Rendering page with podcasts and no podcasts saved', () => {
        const mockStore = getMockStore({
            filteredPodcast: [
                {
                    author: 'THE',
                    description: 'asd',
                    id: 1,
                    img: '',
                    title: 'THE'
                }
            ],
            podcastDetail: null
        }
        )

        useValidateExistingData.mockReturnValue({
            search: true,
            validateLocalStorage: jest.fn(),
            saveDataLocalStorage: jest.fn(),
            dataSaved: []
        })

        render(
            <MemoryRouter >
                <Provider store={mockStore}>
                    <PodcastPage />
                </Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('0')).toBeTruthy()
    })
})