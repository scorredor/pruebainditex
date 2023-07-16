import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EpisodeStoreModel } from '../models/store/episodeStoreModel';
import { EpisodieModel, EpisodieStoreModelInitialize } from '../models/store/podcastEpisodiesStoreModel';

export const initialEpisodeStoreState: EpisodeStoreModel = {
    episode: new EpisodieStoreModelInitialize()
}

const EpisodeSlice = createSlice({
    name: 'episode',
    initialState: initialEpisodeStoreState,
    reducers: {
        setEpisode(state, action: PayloadAction<EpisodieModel>) {
            state.episode = action.payload
        },
    }
})


export default EpisodeSlice;