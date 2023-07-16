import { configureStore } from '@reduxjs/toolkit'
import PodcastSlice from '../../modules/podcast/domain/store/podcastSlice'
import HeaderSlice from '../../shared/store/headerSlice'
import EpisodeSlice from '../../modules/podcast/domain/store/episodeSlice';
import createSagaMiddleware from '@redux-saga/core'
import podcastSaga from '../../modules/podcast/domain/sagas';

const saga = createSagaMiddleware ()

const store = configureStore({
  reducer: {
    podcasts: PodcastSlice.reducer,
    headerBar: HeaderSlice.reducer,
    episode : EpisodeSlice.reducer
  },
  middleware: [saga],
})

// #region Sagas
saga.run(podcastSaga)
// #endregion

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store