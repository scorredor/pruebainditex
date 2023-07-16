import styles from './index.module.scss'

interface Props {
    text: string
}

export const InternalLink = (props: Props) => {
    return (<p className={styles.internalLink}>{props.text}</p>)
}