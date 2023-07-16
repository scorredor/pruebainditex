import styles from './index.module.scss'

interface Props {
    id: number,
    img: string,
    alt: string,
    title: string,
    author: string,
    description: string,
    onClick : () => void 
}

const by = 'by '
const description = 'Description:'

export const PodcastDetail = (props: Props) => {

    return (<div data-testid="podcastdetail-testId"
        className={styles.podcastDetail}
        onClick={props.onClick}>
        <div className={styles.podcastDetail__image}>
            <img height={150} width={150} alt={props.alt} src={props.img} />
        </div>
        <hr />
        <div className={styles.podcastDetail__song}>
            <p className={styles.podcastDetail__title}>{props.title}</p>
            <p className={[styles.podcastDetail__author, styles.title___italics].join(' ')}>{by}{props.author}</p>
        </div>
        <hr />
        <div className={styles.podcastDetail__song}>
            <p className={[styles.podcastDetail__title, styles.title___normalSize].join(' ')}>{description}</p>
            <p className={[styles.podcastDetail__author, styles.title___italics].join(' ')}>{props.description}</p>
        </div>
    </div>)
}