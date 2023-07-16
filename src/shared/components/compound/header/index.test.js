import { render, screen } from '@testing-library/react';
import { Header } from '.'

describe('Pruebas componente Header', () => {

    const title = 'Podcaster'
    const loadingTestId = 'loading-testId'

    test('Muestra el titulo de la pagina', () => {
        render(<Header showLoading title={title} />)
        expect(screen.getByText(title))
    })

    test('Muestra el logo de cargando cuando se requiere', () => {
        render(<Header showLoading title={title} />)
        expect(screen.getByTestId(loadingTestId))
    })

    test('No muestra el logo de cargando cuando no se requiere', () => {
        render(<Header title={title} />)
        expect(screen.queryByTestId(loadingTestId)).not.toBeInTheDocument()
    })
})