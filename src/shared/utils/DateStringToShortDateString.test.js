import { dateStringToShortDateString, milisegundosAMinutosYSegundos } from './DateStringToShortDateString'


describe('DateStringToShortDateString testing', () => {
    test('dateStringToShortDateString get correct value', () => {
        const test = dateStringToShortDateString('2023-07-14T07:01:00Z')
        expect(test).toEqual('14/07/2023')
    })

    test('milisegundosAMinutosYSegundos get correct value', () => {
        const test = milisegundosAMinutosYSegundos(1844000) 
        expect(test).toEqual('30:44')
    })

    test('milisegundosAMinutosYSegundos adding left zero', () => {
        const test = milisegundosAMinutosYSegundos(544000) 
        expect(test).toEqual('09:04')
    })
})