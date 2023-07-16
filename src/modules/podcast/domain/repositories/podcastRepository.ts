import { PodcastEpisodiesResponseModel } from '../models/podcastEpisodiesResponseModel';
import { PodcastResponseModel } from '../models/podcastResponseModel'

export default interface PodcastRepository {
    GetPodcast(): Promise<PodcastResponseModel>,
    GetPodcastDetail(podcastId: string): Promise<PodcastEpisodiesResponseModel>,
}