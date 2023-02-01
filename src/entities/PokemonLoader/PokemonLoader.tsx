import styles from './PokemonLoader.module.scss';


export const PokemonLoader = () => {
    return (
        <div className={styles.skeleton}>
            <div className={styles.number}></div>
            <div className={styles.types}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
            <div className={styles.image}></div>
            <div className={styles.name}></div>
        </div>
    );
};
