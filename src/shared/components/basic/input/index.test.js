import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './index.tsx'

describe('Testint Input Component', () => {
    const value = 'Hola Mundo';
    const valueChanged = 'Cambie!'

    test('Muestra el texto', () => {
        render(<Input value={value} />);
        expect(screen.getByDisplayValue('Hola Mundo'))
    })

    test('Se invoca el evento onChange', () => {
        const onChangeMock = jest.fn()
        render(<Input value={value} onChange={onChangeMock} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {
            target: {
                value: valueChanged
            }
        })

        expect(onChangeMock).toHaveBeenCalled()
    })

    test('Se muestra el placeholder', () => {
        render(<Input placeholder={value} onChange={jest.fn} />);
        expect(screen.getByPlaceholderText ('Hola Mundo'))
    })
})