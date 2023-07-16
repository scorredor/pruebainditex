import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HeaderBarState } from '../model/headerBarState';


export const initialParametersState: HeaderBarState = {
    title: process.env.REACT_APP_TITLE!,
    showLoading: true
}

const HeaderSlice = createSlice({
    name: 'headerBar',
    initialState: initialParametersState,
    reducers: {
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;
        },
        setShowLoading(state, action: PayloadAction<boolean>) {
            state.showLoading = action.payload;
        },
    }
})


export default HeaderSlice;