import { useEffect } from 'react';
import styles from './index.module.scss'
import { PodcastDetail } from '../../../../../shared/components/compound/podcastDetail/index';
import { useAppDispatch, useAppSelector } from '../../../../../config/redux/hook'
import HeaderSlice from '../../../../../shared/store/headerSlice'
import { useNavigate, useParams } from 'react-router-dom'
import EpisodeSlice from '../../../domain/store/episodeSlice';
import { EpisodeComponent } from '../../components/episode';


export default function EpisodiePage() {

    const navigate = useNavigate()
    const podcastEpisodies = useAppSelector(state => state.podcasts.podcastDetail)
    const episodePocast = useAppSelector(state => state.episode.episode)
    const headerActions = HeaderSlice.actions
    const episodeActions = EpisodeSlice.actions
    const dispatch = useAppDispatch();
    const { episodeId } = useParams();    
    useEffect(() => {
        dispatch(headerActions.setShowLoading(false))
        if (podcastEpisodies.id === 0) navigate('/')
        dispatch(episodeActions.setEpisode(podcastEpisodies.episodies.find(p => p.id === Number(episodeId))!))
    }, [])

    return (<div className={styles.episodePage}>
        <section>
            <PodcastDetail
                alt={podcastEpisodies.alt}
                author={podcastEpisodies.author}
                description={podcastEpisodies.description}
                id={podcastEpisodies.id}
                img={podcastEpisodies.img}
                title={podcastEpisodies.title}
                onClick={() => {
                    dispatch(headerActions.setShowLoading(true))
                    navigate(-1)
                }}
            />
        </section>
        <section className={styles.episodePage__description}>
            <EpisodeComponent
                description={episodePocast.description}
                podcast={episodePocast.urlPodcast}
                title={episodePocast.title}
            />
        </section>
    </div>)

}