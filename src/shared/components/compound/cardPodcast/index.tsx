import styles from './index.module.scss'

interface Props {
    id: string,
    image: string,
    title: string,
    author: string,
    alt: string,
    onClick: (id: string) => void
}

const authorTemplate = 'Author: '

export const CardPodcast = (props: Props) => {
    return (<div data-testid={'cardDiv'}
        key={props.id}
        className={styles.cardContainer}
        onClick={() => props.onClick(props.id)}>
        <div className={styles.cardContainer__imageContainer}>
            <img height={100} width={100} src={props.image} alt={props.alt} />
        </div>
        <p className={styles.cardContainer__title}>{props.title}</p>
        <p className={styles.cardContainer__author}>{authorTemplate}{props.author}</p>

    </div>)
}