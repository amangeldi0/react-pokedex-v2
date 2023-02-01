import styles from './AvatarLoader.module.scss'

export const AvatarLoader = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.ldsRing}>
                <div className={styles.div}></div>
                <div className={styles.div}></div>
                <div className={styles.div}></div>
                <div className={styles.div}></div>
            </div>
        </div>
    );
};

