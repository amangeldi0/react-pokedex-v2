import { FC } from 'react'

import { useTheme } from "shared/lib/hooks/useTheme";
import { useUserDataWithUid } from "shared/lib/hooks/useUserDataWithUid";


import loader from '../../../assets/loader.gif';
import styles from './UserInfo.module.scss';


interface UserInfoProps{
    uid: string
}

export const UserInfo: FC<UserInfoProps> = ({uid}) => {

    const { theme } = useTheme()

    const { firestoreValue, firestoreError, firestoreLoading } = useUserDataWithUid(uid)

    const bgStyle = theme === 'light'
        ? {background: '#fff'}
        : {background: 'rgba(255, 255, 255, 0.06)'}

    if (firestoreLoading){
        return <div className={styles.userInfoLoading} style={bgStyle}>
            <img src={loader} alt="loader"/>
        </div>
    }

    if (firestoreError){
        throw new Error(firestoreError.message)
    }

    const photo = firestoreValue.data()?.photo;
    const firstName = firestoreValue.data()?.firstName;
    const email = firestoreValue.data()?.email;

    return (
        <div className={styles.userInfo} style={bgStyle}>
            <div className={styles.img}>
                <img src={photo} alt=""/>
            </div>
            <div className={styles.column}>
                <div className={styles.data}>
                    Id: <span>{uid}</span>
                </div>
                <div className={styles.data}>
                    Display Name: <span>{firstName}</span>
                </div>
                <div className={styles.data}>
                    Email: <span>{email}</span>
                </div>
            </div>
        </div>
    );
};
