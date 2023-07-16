import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { useValidateExistingData } from '../../../domain/hooks/useValidateExistingData';
import PodcastSlice from '../../../domain/store/podcastSlice';
import PodcastDetailPage from '.';

jest.mock('../../../domain/hooks/useValidateExistingData')

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            podcasts: PodcastSlice.reducer,
        },
        preloadedState: initialState
    })
}

describe('PodcastDetailPage testing', () => {

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Rendering page with epidosies', () => {

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

            podcasts: {
                podcasts: [
                    {
                        author: 'THE',
                        description: 'asd',
                        id: 1,
                        img: '',
                        title: 'THE'
                    }
                ],
                isLoading: false,
                podcastDetail: {
                    id: 1,
                    title: 'titulo',
                    author: 'Sergio',
                    description: 'Description',
                    episodies: [],
                    img: '',
                    alt: 'a'
                }
            }
        }
        )

        render(
            <MemoryRouter >
                <Provider store={mockStore}>
                    <PodcastDetailPage />
                </Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('Title')).toBeTruthy()
    })


    test('Rendering page with search', () => {

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

        const mockStore = getMockStore({

            podcasts: {
                podcasts: [
                    {
                        author: 'THE',
                        description: 'asd',
                        id: 1,
                        img: '',
                        title: 'THE'
                    }
                ],
                isLoading: false,
                podcastDetail: {
                    id: 1,
                    title: 'titulo',
                    author: 'Sergio',
                    description: 'Description',
                    episodies: [],
                    img: '',
                    alt: 'a'
                }
            }
        }
        )

        render(
            <MemoryRouter >
                <Provider store={mockStore}>
                    <PodcastDetailPage />
                </Provider>
            </MemoryRouter>
        )        
    })

    test('Rendering page with search and no saved data', () => {

        useValidateExistingData.mockReturnValue({
            search: true,
            validateLocalStorage: jest.fn(),
            saveDataLocalStorage: jest.fn(),
            dataSaved: { id: 1 }
        })

        const mockStore = getMockStore({

            podcasts: {
                podcasts: [
                    {
                        author: 'THE',
                        description: 'asd',
                        id: 1,
                        img: '',
                        title: 'THE'
                    }
                ],
                isLoading: false,
                podcastDetail: {
                    id: 1,
                    title: 'titulo',
                    author: 'Sergio',
                    description: 'Description',
                    episodies: [],
                    img: '',
                    alt: 'a'
                }
            }
        }
        )

        render(
            <MemoryRouter >
                <Provider store={mockStore}>
                    <PodcastDetailPage />
                </Provider>
            </MemoryRouter>
        )        
    })
})