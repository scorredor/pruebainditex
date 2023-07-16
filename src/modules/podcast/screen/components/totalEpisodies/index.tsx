import styles from './index.module.scss'

interface Props {
    total: number
}

const EPISODES = 'Episodes:'

export const TotalEpisodies = (props: Props) => {
    return (<div className={styles.totalEpisodes}>
        <p>{`${EPISODES} ${props.total}`}</p>
    </div>)
}