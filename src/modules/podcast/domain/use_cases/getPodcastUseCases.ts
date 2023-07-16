import PodcastRepository from '../repositories/podcastRepository';


export default class GetPodcastUseCases {
    constructor(private podcastRepository: PodcastRepository) { }

    execute() {
        return this.podcastRepository.GetPodcast();
    }
}
