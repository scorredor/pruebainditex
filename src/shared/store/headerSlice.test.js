import HeaderSlice,  { initialParametersState } from './headerSlice'

describe('HeaderSlice testing', () => {
    test('testing initialize state', () => {
        
        expect(HeaderSlice.name).toBe('headerBar')
        const state = HeaderSlice.reducer(initialParametersState, {})
        expect(state).toEqual(initialParametersState)
    })

    test('testing setTitle', () => {
        
        const state = HeaderSlice.reducer(initialParametersState, HeaderSlice.actions.setTitle('titulo'))
        expect(state).toEqual({
            title: 'titulo',
            showLoading: true
        })
    })

    test('testing setShowLoading', () => {
        
        const state = HeaderSlice.reducer(initialParametersState, HeaderSlice.actions.setShowLoading(true))
        expect(state.showLoading).toEqual(true)
    })
}
)