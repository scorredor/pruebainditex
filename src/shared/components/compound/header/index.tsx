import { Loading } from '../../basic/loading'
import styles from './index.module.scss'

interface Props {
    title: string,
    showLoading: boolean,
    onClickTitle: () => void
}

export const Header = (props: Props) => {

    return (<div className={styles.header}>
        <h5 onClick={props.onClickTitle}>{props.title}</h5>
        {props.showLoading && <Loading />}
    </div>)
}