import { useTheme } from "shared/lib/hooks/useTheme";
import { useUser } from "shared/lib/hooks/useUser";

import loader from '../../../assets/loader.gif';
import styles from './UserInfo.module.scss';


export const UserInfo = () => {

    const { theme } = useTheme()

    const { user, error, loading } = useUser()

    const bgStyle = theme === 'light'
        ? {background: '#fff'}
        : {background: 'rgba(255, 255, 255, 0.06)'}

    if (loading){
        return <div className={styles.userInfoLoading} style={bgStyle}>
            <img src={loader} alt="loader"/>
        </div>
    }

    if (error){
        throw new Error(error.message)
    }

    return (
        <div className={styles.userInfo} style={bgStyle}>
            <div className={styles.img}>
                <img src={user?.photoURL} alt=""/>
            </div>
            <div className={styles.column}>
                <div className={styles.data}>
                    Id: <span>{user?.uid}</span>
                </div>
                <div className={styles.data}>
                    Display Name: <span>{user?.displayName}</span>
                </div>
                <div className={styles.data}>
                    Email: <span>{user?.email}</span>
                </div>
            </div>
        </div>
    );
};
