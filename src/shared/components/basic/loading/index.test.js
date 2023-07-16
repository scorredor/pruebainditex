import { render } from '@testing-library/react'
import { Loading } from './index'

describe('Pruebas componente Loading', () => {
    test('Se muestra el componente', () => {
        const { container } = render(<Loading />)        
        expect(container.getElementsByClassName('loading').length).toBe(1);
    })
})