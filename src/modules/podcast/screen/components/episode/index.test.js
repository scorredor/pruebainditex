import { render, screen } from '@testing-library/react';
import { EpisodeComponent } from './index'

describe('Pruebas componente Episode', () => {

    const titulo = 'titulo';
    const descripcion = 'descripcion';
    const podcast = 'mpe4'
    const audioPlayerTestId = 'audioplayer-testid';

    test('Muestra el titulo del episodio', () => {
        render(<EpisodeComponent title={titulo} description={descripcion} podcast={podcast} />)

        expect(screen.getByText(titulo))
    })

    test('Muestra la descripcion del episodio', () => {
        render(<EpisodeComponent title={titulo} description={descripcion} podcast={podcast} />)

        expect(screen.getByText(descripcion))
    })

    test('Muestra el componente reproductor', () => {
        render(<EpisodeComponent title={titulo} description={descripcion} podcast={podcast} />)

        expect(screen.getByTestId(audioPlayerTestId))
    })
})