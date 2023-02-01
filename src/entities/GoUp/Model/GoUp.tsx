import arrow from '/src/assets/icon/arrow.svg'
import styles from './GoUp.module.scss';
export const GoUp = () => {
    const handleUpButton = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className={styles.go__up} onClick={handleUpButton}>
            <img src={arrow} alt='arrow' />
        </div>
    );
};
