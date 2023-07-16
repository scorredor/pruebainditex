import { put, takeEvery } from 'redux-saga/effects'
import PodcastApiRepository from '../../data/podcastApiRepository'
import GetPodcastUseCases from '../use_cases/getPodcastUseCases'
import PodcastSlice from '../store/podcastSlice'
import { PodcastResponseModel } from '../models/podcastResponseModel'
import GetPodcastDetailUseCases from '../use_cases/getPodcastDetailUseCases'
import { PayloadAction } from '@reduxjs/toolkit'
import { PodcastEpisodiesResponseModel } from '../models/podcastEpisodiesResponseModel'


 export function* getPodcasts() {
  const repository = new PodcastApiRepository()  
  const podcastUseCase = new GetPodcastUseCases(repository)

  try {
    const podcasts: PodcastResponseModel = yield podcastUseCase.execute()
    yield put(PodcastSlice.actions.getPodcastSuccess(podcasts))
  } catch (err) {
    yield put(PodcastSlice.actions.catchError(err as Error))
  }
} 

export function* getPodcastsDetails(action: PayloadAction<string>) {
  const repository = new PodcastApiRepository()  
  const podcastEpisodiesUseCase = new GetPodcastDetailUseCases(repository)

  try {
    const podcastsDetails: PodcastEpisodiesResponseModel = yield podcastEpisodiesUseCase.execute(action.payload)    
    podcastsDetails.podcastId = action.payload
    yield put(PodcastSlice.actions.getPodcastDetailSuccess(podcastsDetails))
  } catch (err) {
    yield put(PodcastSlice.actions.catchError(err as Error))
  }
} 

export default function* podcastSaga() {
  yield takeEvery(PodcastSlice.actions.fetchGetPodcasts, getPodcasts)  
  yield takeEvery(PodcastSlice.actions.fetchGetPodcastsDetails, getPodcastsDetails)
}
