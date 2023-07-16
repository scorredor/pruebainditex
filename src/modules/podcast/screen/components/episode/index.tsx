import { AudioPlayer } from '../../../../../shared/components/basic/audioPlayer'
import styles from './index.module.scss'

interface Props {
    title: string,
    description: string,
    podcast: string
}

export const EpisodeComponent = (props: Props) => {

    return (<section className={styles.episodeComponent}>
        <div>
            <h4>{props.title}</h4>
            <div className={styles.episodeComponent__descriptionText}
                dangerouslySetInnerHTML={{__html: props.description}}
            />            
        </div>
        <div className={styles.episodeComponent__player}>
            <AudioPlayer src={props.podcast} />
        </div>

    </section>)
}