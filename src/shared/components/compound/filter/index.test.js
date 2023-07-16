
import { render, screen, fireEvent } from '@testing-library/react'
import { Filter } from './index'

describe('Pruebas Filter Component', () => {

    const totalCount = 100
    const valueFilter = 'Fitlrado'

    test('Se muestra el contador', () => {
        render(
            <Filter
                totalCount={totalCount}
                onChange={jest.fn} />
        )

        expect(screen.getByText(totalCount))
    })

    test('Invoca el evento al cambiar del input', () => {
        const onChangeMock = jest.fn()
        render(
            <Filter
                totalCount={totalCount}
                onChange={onChangeMock} />
        )

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {
            target: {
                value: valueFilter
            }
        })

        expect(onChangeMock).toHaveBeenCalled()
    })

    test('Se cambia el valor del filtro', () => {
        const onChangeMock = jest.fn()
        render(
            <Filter
                totalCount={totalCount}
                onChange={onChangeMock} />
        )

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {
            target: {
                value: valueFilter
            }
        })

        expect(input.value).toBe(valueFilter)
    })
})