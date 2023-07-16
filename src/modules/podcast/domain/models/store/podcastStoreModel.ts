import { PodcastDetailStoreModel } from './podcastEpisodiesStoreModel'

export interface PodcastStoreModel {
    podcasts: PodcastModel[],
    filteredPodcast: PodcastModel[],
    podcastDetail: PodcastDetailStoreModel,
    isLoading : boolean,
    hasError : boolean,
    errorMessage : string,
}


export interface PodcastModel {
    id: string,
    img: string,
    title: string,
    author: string,
    description: string
}