import { FC } from 'react'

import { useTheme } from "shared/lib/hooks/useTheme";
import { useUserDataWithUid } from "shared/lib/hooks/useUserDataWithUid";
import { useNavigate } from "react-router-dom";

import { UserLoading } from "../userLoading/UserLoading";

import styles from './User.module.scss';

interface UserProps {
    uid: string;
}

export const User: FC<UserProps> = ({uid}) => {

    const { theme } = useTheme()

    const navigate = useNavigate()

    const { firestoreError, firestoreValue, firestoreLoading } = useUserDataWithUid(uid)

    const bg = theme === 'light'
        ? {background: '#fff'}
        : {background: 'rgba(255, 255, 255, 0.06)'}

    if (firestoreLoading){
        return <UserLoading />
    }

    if (firestoreError){
        throw new Error(firestoreError.message)
    }

    const photo = firestoreValue.data()?.photo;
    const firstName = firestoreValue.data()?.firstName;
    const email = firestoreValue.data()?.email;

    return (
        <div className={styles.userInfo} style={bg} onClick={() => navigate(`/user/${uid}`)}>
            <div className={styles.img}>
                <img src={photo} alt="userPhoto"/>
            </div>
            <div className={styles.column}>
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
