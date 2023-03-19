import loader from 'assets/loader.gif';
import { FC } from 'react';
import { useUserDataWithUid } from 'shared/lib/hooks/useUserDataWithUid';

import cls from './UserInfo.module.scss';

interface UserInfoProps{
    uid: string
}

export const UserInfo: FC<UserInfoProps> = ({ uid }) => {
    const { firestoreValue, firestoreError, firestoreLoading } = useUserDataWithUid(uid);

    if (firestoreLoading) {
        return (
            <div className={cls.userInfoLoading}>
                <img src={loader} alt="loader" />
            </div>
        );
    }

    if (firestoreError) {
        throw new Error(firestoreError.message);
    }

    const photo = firestoreValue.data()?.photo;
    const firstName = firestoreValue.data()?.firstName;
    const email = firestoreValue.data()?.email;

    return (
        <div className={cls.userInfo}>
            <div className={cls.img}>
                <img src={photo} alt="userPhoto" />
            </div>
            <div className={cls.column}>
                <div className={cls.data}>
                    Id:
                    {' '}
                    <span>{uid}</span>
                </div>
                <div className={cls.data}>
                    Display Name:
                    {' '}
                    <span>{firstName}</span>
                </div>
                <div className={cls.data}>
                    Email:
                    {' '}
                    <span>{email}</span>
                </div>
            </div>
        </div>
    );
};
