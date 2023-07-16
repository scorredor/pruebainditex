import PodcastRepository from '../repositories/podcastRepository';


export default class GetPodcastDetailUseCases {
    constructor(private podcastRepository: PodcastRepository) { }

    execute(podcastId: string) {
        return this.podcastRepository.GetPodcastDetail(podcastId);
    }
}
