import styles from './index.module.scss'
import { useEffect } from 'react';
import { useValidateExistingData } from '../../../domain/hooks/useValidateExistingData';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../config/redux/hook';
import { PodcastDetail } from '../../../../../shared/components/compound/podcastDetail';
import { TotalEpisodies } from '../../components/totalEpisodies';
import { DataTable } from '../../../../../shared/components/compound/DataTable';
import { columnsDataGrid } from '../../../domain/models/dataTable/episodiesColumns';
import { buildRowsEpisodies } from '../../../domain/models/dataTable/episodiesRows';
import { buildPodcastLs } from '../../utils/buildPodcastLs';
import PodcastSlice from '../../../domain/store/podcastSlice';
import { PodcastDetailStoreModel } from '../../../domain/models/store/podcastEpisodiesStoreModel';
import HeaderSlice from '../../../../../shared/store/headerSlice';

export default function PodcastDetailPage() {
    const allPodcasts = useAppSelector(state => state.podcasts.podcasts)
    const isLoading = useAppSelector(state => state.podcasts.isLoading)
    const podcastEpisodies = useAppSelector(state => state.podcasts.podcastDetail)

    const { search, dataSaved, validateLocalStorage, saveDataLocalStorage } = useValidateExistingData()
    const podcastEpisodiesSaved = dataSaved as PodcastDetailStoreModel
    const { podcastId } = useParams();
    const navigate = useNavigate()

    const podcastActions = PodcastSlice.actions
    const headerActiosn = HeaderSlice.actions
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(headerActiosn.setShowLoading(true))
        if (allPodcasts.length === 0) navigate('/')
        validateLocalStorage(podcastId!)
    }, [])

    useEffect(() => {
        dispatch(headerActiosn.setShowLoading(isLoading))
    }, [isLoading])

    useEffect(() => {
        if (search) {
            dispatch(podcastActions.fetchGetPodcastsDetails(podcastId!))
        }
    }, [search])

    useEffect(() => {
        if (podcastEpisodiesSaved.id > 0) {
            dispatch(podcastActions.setPodcastEpisodiesSaved(podcastEpisodiesSaved))
        }
    }, [podcastEpisodiesSaved])

    useEffect(() => {
        if (podcastEpisodies.id === Number(podcastId))
            saveDataLocalStorage(podcastId!.toString(), buildPodcastLs(podcastEpisodies))
    }, [podcastEpisodies])

    const onClickRow = (id: number) => {
        dispatch(headerActiosn.setShowLoading(true))
        navigate(`/podcast/${podcastId}/episode/${id}`)
    }
    return (<div className={styles.podcastEpisodiesPage}>
        {!isLoading && <><section>
            <PodcastDetail
                alt={podcastEpisodies.alt}
                author={podcastEpisodies.author}
                description={podcastEpisodies.description}
                id={podcastEpisodies.id}
                img={podcastEpisodies.img}
                title={podcastEpisodies.title}
                onClick={() => {
                    dispatch(headerActiosn.setShowLoading(true))
                    navigate(-1)
                }}
            />
        </section>
            <section className={styles.podcastEpisodiesPage__episodies}>
                <TotalEpisodies total={podcastEpisodies.episodies.length} />
                <DataTable
                    columns={columnsDataGrid}
                    rows={buildRowsEpisodies(podcastEpisodies.episodies)}
                    onRowClick={onClickRow}
                />
            </section>
        </>}
    </div>)
}