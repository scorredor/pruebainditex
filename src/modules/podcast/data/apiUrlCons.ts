import { IUrlService, ApiUrlCons } from '../../../shared/constants/apiUrlCons'

export const ApiUrlModuleCons: IUrlService = {
	GetPodcast: `${ApiUrlCons.API_URL_BACK_END_ITUNES}/us/rss/toppodcasts/limit=100/genre=1310/json`,	
	GetPodcastDetail: `${ApiUrlCons.API_URL_BACK_END_ITUNES}/lookup?id=`,	
}