import styles from './index.module.scss'
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../config/redux/hook';
import { useValidateExistingData } from '../../domain/hooks/useValidateExistingData';
import { Filter } from '../../../../shared/components/compound/filter';
import Grid from '@mui/material/Grid';
import { CardPodcast } from '../../../../shared/components/compound/cardPodcast';
import PodcastSlice from '../../domain/store/podcastSlice';
import { useNavigate } from 'react-router-dom';
import { buildPodcastLs } from '../utils/buildPodcastLs';
import { PodcastModel } from '../../domain/models/store/podcastStoreModel';
import HeaderSlice from '../../../../shared/store/headerSlice';

const FIND_ALL_PODCAST = '0'
const placeholderFilter = 'Filter podcasts...'

export default function PodcastPage() {
    const podcasts = useAppSelector(state => state.podcasts.filteredPodcast)
    const isLoading = useAppSelector(state => state.podcasts.isLoading)
    const dispatch = useAppDispatch()
    const { search, dataSaved, validateLocalStorage, saveDataLocalStorage } = useValidateExistingData()
    const allPodcastSaved = dataSaved as PodcastModel[]
    const navigate = useNavigate()

    const podcastActions = PodcastSlice.actions
    const headerActiosn = HeaderSlice.actions

    useEffect(() => {
        dispatch(headerActiosn.setShowLoading(true))
        validateLocalStorage(FIND_ALL_PODCAST)
    }, [])

    useEffect(() => {
        dispatch(headerActiosn.setShowLoading(isLoading))
    },[isLoading])

    useEffect(() => {
        if (search) {
            dispatch(podcastActions.fetchGetPodcasts())
        }
    }, [search])

    useEffect(() => {
        if (allPodcastSaved.length > 0) {
            dispatch(podcastActions.setPodcastSaved(allPodcastSaved))
        }
    }, [allPodcastSaved])

    useEffect(() => {
        if (podcasts.length > 0 && allPodcastSaved.length === 0)
            saveDataLocalStorage(FIND_ALL_PODCAST, buildPodcastLs(podcasts))
    }, [podcasts])

    const onChangeFilter = (value: string) => {
        dispatch(podcastActions.filterPodcast(value))
    }

    const redirectPodcastDetailPage = (id: string) => {
        dispatch(headerActiosn.setShowLoading(true))
        navigate(`/podcast/${id}`)
    }

    return (
        <div className={styles.podcastPage}>
            <div className={styles.podcastPage__filterSection}>
                <Filter data-testid="filter-podcastpage" onChange={onChangeFilter} totalCount={podcasts.length} placeholder={placeholderFilter} />
            </div>
            <Grid container spacing={2}>
                {podcasts.map((p) => {
                    return <Grid key={p.id} item xs={3}>
                        <CardPodcast
                            alt={p.author}
                            author={p.author}
                            id={p.id}
                            image={p.img}
                            onClick={redirectPodcastDetailPage}
                            title={p.title}
                        />
                    </Grid>
                })}
            </Grid>
        </div>
    )
}