export interface PodcastDetailStoreModel {
    id: number,
    title: string,
    author: string,
    description: string,
    episodies: EpisodieModel[],
    img: string,
    alt: string
}

export interface EpisodieModel {
    id: number,
    title: string,
    date: string,
    duration: string,
    description: string,
    urlPodcast: string
}

export interface EpisodieModelLite {
    id: number,
    title: string,
    date: string,
    duration: string,        
}


export class PodcastDetailStoreModelInitialize implements PodcastDetailStoreModel {
    id = 0
    title = ''
    author = ''
    description = ''
    episodies = []
    img = ''
    alt = ''
}

export class EpisodieStoreModelInitialize implements EpisodieModel{
    id = 0
    title = ''
    date = ''
    duration = ''
    description = ''
    urlPodcast = ''
}