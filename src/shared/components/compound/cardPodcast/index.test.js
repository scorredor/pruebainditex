import { CardPodcast } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas CardPodcast Componente', () => {

    const alt = 'ImagenArtista';
    const author = 'Pepito';
    const src = 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/07/88/b3/0788b35f-1829-6fbd-2488-ecaf83b8d8ab/mza_9852863690630397024.jpg/170x170bb.png'
    const title = 'Musica One'

    test('Muestra la imagen,', () => {
        render(<CardPodcast alt={alt} author={author} image={src} title={title} />)
        expect(screen.getByAltText(alt))

    })

    test('Muestra el titulo correctamente', () => {
        render(<CardPodcast alt={alt} author={''} image={src} title={title} />)
        expect(screen.getByText(title))

    })

    test('Muestra el autor correctamente', () => {
        render(<CardPodcast alt={alt} author={author} image={src} title={''} />)
        expect(screen.getByText('Author: ' + author))
    })

    test('Invoca el evento click', () => {

        const onClickMock = jest.fn()

        render(<CardPodcast alt={alt} author={author} image={src} title={''} onClick={onClickMock} />)

        const card = screen.getByTestId('cardDiv')

        fireEvent.click(card)

        expect(onClickMock).toHaveBeenCalled()

    })
})