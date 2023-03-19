import styles from './UserLoading.module.scss';
import loader from "assets/loader.gif";

export const UserLoading = () => {
    return (
        <div >
            <div className={styles.loading}>
                <img src={loader} alt="loader"/>
            </div>
        </div>
    );
};
