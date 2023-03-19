import loader from 'assets/loader.gif';

import styles from './UserLoading.module.scss';

export const UserLoading = () => (
    <div>
        <div className={styles.loading}>
            <img src={loader} alt="loader" />
        </div>
    </div>
);
