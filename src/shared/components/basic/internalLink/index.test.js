import { render, screen } from '@testing-library/react'
import { InternalLink } from './index.tsx'

describe('Link testing', () => {
    const link = 'hola Mundo';

    test('Muestra el link enviado', () => {
        render(<InternalLink text={link} />)

        expect(screen.getByText(link))
    })
})