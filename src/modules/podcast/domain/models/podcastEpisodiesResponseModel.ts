/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface PodcastEpisodiesResponseModel {
    resultCount: number;
    podcastId: string,
    results:     Result[];
}

export interface Result {
    wrapperType:             string;
    kind:                    string;
    collectionId:            number;
    trackId:                 number;
    artistName?:             string;
    collectionName:          string;
    trackName:               string;
    collectionCensoredName?: string;
    trackCensoredName?:      string;
    collectionViewUrl:       string;
    feedUrl:                 string;
    trackViewUrl:            string;
    artworkUrl30?:           string;
    artworkUrl60:            string;
    artworkUrl100?:          string;
    collectionPrice?:        number;
    trackPrice?:             number;
    collectionHdPrice?:      number;
    releaseDate:             string;
    collectionExplicitness?: string;
    trackExplicitness?:      string;
    trackCount?:             number;
    trackTimeMillis:         number;
    country:                 string;
    currency?:               string;
    primaryGenreName?:       string;
    contentAdvisoryRating:   string;
    artworkUrl600:           string;
    genreIds?:               string[];
    genres:                  Array<GenreClass | string>;
    previewUrl?:             string;
    episodeUrl?:             string;
    episodeFileExtension?:   string;
    closedCaptioning?:       string;
    artistIds?:              any[];
    episodeContentType?:     string;
    artworkUrl160?:          string;
    episodeGuid?:            string;
    description?:            string;
    shortDescription?:       string;
}

export interface GenreClass {
    name: string;
    id:   string;
}
