import styles from './index.module.scss'

export const Loading = () => {
    return (
        <div data-testid="loading-testId" className={styles.container}>
            <div className={styles.loading}>
                <div className={styles.loading__ball}></div>
                <div className={styles.loading__ball}></div>
                <div className={styles.loading__ball}></div>
            </div>
        </div>
    )
}