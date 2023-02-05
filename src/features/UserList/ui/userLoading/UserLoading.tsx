import { useTheme } from "shared/lib/hooks/useTheme";

import styles from './UserLoading.module.scss';
import loader from "../../../../assets/loader.gif";

export const UserLoading = () => {

    const { theme } = useTheme()

    const bg = theme === 'light'
        ? {background: '#fff'}
        : {background: 'rgba(255, 255, 255, 0.06)'}


    return (
        <div >
            <div className={styles.loading} style={bg}>
                <img src={loader} alt="loader"/>
            </div>
        </div>
    );
};
