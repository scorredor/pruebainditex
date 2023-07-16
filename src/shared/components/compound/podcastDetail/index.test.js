import { render, screen, fireEvent } from '@testing-library/react';
import { PodcastDetail } from '.';

describe('Pruebas del component PodcastDetail', () => {

    const alt = '1'
    const author = 'Michael Jakcon'
    const description = 'A podcast where musiicans take apart their songs, and piece by piece, tell the story of how they were made'
    const img = 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/07/88/b3/0788b35f-1829-6fbd-2488-ecaf83b8d8ab/mza_9852863690630397024.jpg/170x170bb.png'
    const title = 'Song Explorer'

    test('Genera el evento click', () => {

        const onClickMock = jest.fn()

        render(<PodcastDetail
            alt={alt}
            author={author}
            description={description}
            img={img}
            title={title}
            id={1}
            onClick={onClickMock}
        />)

        const podcastContainer = screen.getByTestId('podcastdetail-testId')

        fireEvent.click(podcastContainer)

        expect(onClickMock).toHaveBeenCalled()

    })

    test('Muestra el titulo autor y descripcion', () => {

        const onClickMock = jest.fn()

        render(<PodcastDetail
            alt={alt}
            author={author}
            description={description}
            img={img}
            title={title}
            id={1}
            onClick={onClickMock}
        />)

       expect(screen.getByText(/Michael/))
       expect(screen.getByText(/podcast/))
       expect(screen.getByText(/Explorer/))

    })

    test('Muestra la imagen', () => {

        const onClickMock = jest.fn()

        render(<PodcastDetail
            alt={alt}
            author={author}
            description={description}
            img={img}
            title={title}
            id={1}
            onClick={onClickMock}
        />)
        expect(screen.getByAltText(alt))

    })
})