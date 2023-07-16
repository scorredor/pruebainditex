import { consumeService } from '../../../config/api/fetch';
import { HttpMethods, ServicesParam } from '../../../config/api/model/servicesParamData';
import { PodcastEpisodiesResponseModel } from '../domain/models/podcastEpisodiesResponseModel';
import { PodcastResponseModel } from '../domain/models/podcastResponseModel';
import PodcastRepository from '../domain/repositories/podcastRepository';
import { ApiUrlModuleCons } from './apiUrlCons';

export default class PodcastApiRepository implements PodcastRepository {

    GetPodcast(): Promise<PodcastResponseModel> {
        const serviceParam: ServicesParam = {
            method: HttpMethods.GET,
            url: ApiUrlModuleCons.GetPodcast
        }

        return consumeService(serviceParam)
    }

    GetPodcastDetail(podcastId: string): Promise<PodcastEpisodiesResponseModel> {
        const serviceParam: ServicesParam = {
            method: HttpMethods.GET,
            url: `${ApiUrlModuleCons.GetPodcastDetail}${podcastId}&entity=podcastEpisode&media`
        }

        return consumeService(serviceParam)
    }
}