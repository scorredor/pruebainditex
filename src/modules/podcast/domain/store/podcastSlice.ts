import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PodcastModel, PodcastStoreModel } from '../models/store/podcastStoreModel';
import { PodcastResponseModel } from '../models/podcastResponseModel';
import { PodcastEpisodiesResponseModel } from '../models/podcastEpisodiesResponseModel';
import { PodcastDetailStoreModelInitialize, EpisodieModel, PodcastDetailStoreModel } from '../models/store/podcastEpisodiesStoreModel';
import { dateStringToShortDateString, milisegundosAMinutosYSegundos } from '../../../../shared/utils/DateStringToShortDateString';

export const initialPodcastStoreState: PodcastStoreModel = {
    podcasts: [],
    filteredPodcast: [],
    isLoading: false,
    hasError: false,
    errorMessage: '',
    podcastDetail: new PodcastDetailStoreModelInitialize()
}

const PodcastSlice = createSlice({
    name: 'podcast',
    initialState: initialPodcastStoreState,
    reducers: {
        fetchGetPodcasts(state) {
            state.isLoading = true
        },
        catchError: (state, action: PayloadAction<Error>) => {
            state.hasError = true
            state.errorMessage = action.payload.message
            state.isLoading = false
        },
        getPodcastSuccess(state, action: PayloadAction<PodcastResponseModel>) {
            const newPodcasts: PodcastModel[] = []

            action.payload.feed.entry.forEach((song) => {

                let newImg = ''
                if (song['im:image'].find(p => p.attributes.height === '170'))
                    newImg = song['im:image'].find(p => p.attributes.height === '170')!.label
                else
                    newImg = song['im:image'].slice(-1)[0].label

                const newPodCast: PodcastModel = {
                    img: newImg,
                    title: song['im:name'].label.substring(0, 40),
                    author: song['im:artist'].label,
                    id: song.id.attributes['im:id'],
                    description: song.summary.label
                }

                newPodcasts.push(newPodCast)
            })
            state.isLoading = false
            state.podcasts = newPodcasts
            state.filteredPodcast = newPodcasts
        },

        setPodcastSaved(state, action: PayloadAction<PodcastModel[]>) {
            state.podcasts = [...action.payload]
            state.filteredPodcast = [...action.payload]
        },

        setPodcastEpisodiesSaved(state, action: PayloadAction<PodcastDetailStoreModel>) {
            state.podcastDetail = action.payload
        },

        filterPodcast(state, action: PayloadAction<string>) {
            if (action.payload === '')
                state.filteredPodcast = [...state.podcasts]
            else {
                const newFiltered: PodcastModel[] = state.podcasts.filter(p => p.author.includes(action.payload) || p.title.includes(action.payload))
                state.filteredPodcast = [...newFiltered]
            }
        },

        /* eslint-disable @typescript-eslint/no-unused-vars */
        fetchGetPodcastsDetails(state, _action: PayloadAction<string>) {
            state.isLoading = true
        },
        getPodcastDetailSuccess(state, action: PayloadAction<PodcastEpisodiesResponseModel>) {                     
            const podcastEpisodies: PodcastDetailStoreModel = new PodcastDetailStoreModelInitialize()                
            const podcastSeleted = state.podcasts.find(p => p.id === action.payload.podcastId)!            
            podcastEpisodies.author = podcastSeleted.author
            podcastEpisodies.title = podcastSeleted.title
            podcastEpisodies.description = podcastSeleted.description
            podcastEpisodies.episodies = []
            podcastEpisodies.id = Number(podcastSeleted.id)
            podcastEpisodies.alt = podcastSeleted.title
            podcastEpisodies.img = podcastSeleted.img                        
            action.payload.results.shift()
            action.payload.results.forEach(p => {
                const episodie: EpisodieModel = {
                    id: p.trackId,
                    title: p.trackName,
                    date: dateStringToShortDateString(p.releaseDate),
                    duration: milisegundosAMinutosYSegundos(p.trackTimeMillis),
                    description: p.description ?? '',
                    urlPodcast: p.episodeUrl ?? ''
                }
                podcastEpisodies.episodies.push(episodie)
            })                        
            state.podcastDetail = podcastEpisodies  
            state.isLoading = false                           
        },
    }
})


export default PodcastSlice;