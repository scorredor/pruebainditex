import { render, screen } from '@testing-library/react';
import { TotalEpisodies } from '.';


describe('Pruebas TotalEpisodies Componente', () => {

    const TOTAL_EPISODIES = 100

    test('Muestra el total de episodios', () => {
        render(<TotalEpisodies total={TOTAL_EPISODIES} />)
        expect(screen.getByText('Episodes: ' + TOTAL_EPISODIES))
    })
})