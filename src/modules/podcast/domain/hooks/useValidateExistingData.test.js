import { renderHook } from '@testing-library/react';
import { useValidateExistingData } from './useValidateExistingData';
import { act } from 'react-dom/test-utils';

describe('useValidateExistingData testing', () => {

    beforeEach(() => {
        localStorage.clear()
    })

    test('Initial State', () => {
        const { result } = renderHook(() => useValidateExistingData())

        expect(result.current).toEqual({
            search: false,
            dataSaved: [],
            validateLocalStorage: expect.any(Function),
            saveDataLocalStorage: expect.any(Function),
        })
    })

    test('saveDataLocalStorage testing', () => {
        const { result } = renderHook(() => useValidateExistingData())

        act(() => {
            result.current.saveDataLocalStorage('0', JSON.stringify({ hola: 'hola' }))
        })
        expect(localStorage.getItem('0')).toEqual(expect.any(String))
    })

    test('validateLocalStorage testing with valid time', () => {
        const { result } = renderHook(() => useValidateExistingData())

        localStorage.setItem('0', `${new Date().getTime()}|||${JSON.stringify({ hola: 'hola' })}`)

        act(() => {
            result.current.validateLocalStorage('0')
        })

        expect(result.current.search).toBe(false)
    })

    test('validateLocalStorage testing with no valid time', () => {
        const { result } = renderHook(() => useValidateExistingData())

        localStorage.setItem('0', `120|||${JSON.stringify({ hola: 'hola' })}`)

        act(() => {
            result.current.validateLocalStorage('0')
        })

        expect(result.current.search).toBe(false)
    })

    test('validateLocalStorage testing with no valid time', () => {
        const { result } = renderHook(() => useValidateExistingData())

        localStorage.setItem('1', `980000|||${JSON.stringify({ hola: 'hola' })}`)

        act(() => {
            result.current.validateLocalStorage('10')
        })

        expect(result.current.search).toEqual(true)
    })
})