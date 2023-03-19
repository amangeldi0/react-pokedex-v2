import { FC } from 'react'

import { useUserDataWithUid } from "shared/lib/hooks/useUserDataWithUid";
import { useNavigate } from "react-router-dom";

import { UserLoading } from "../userLoading/UserLoading";

import cls from './User.module.scss';

interface UserProps {
    uid: string;
}

export const User: FC<UserProps> = ({uid}) => {

    const navigate = useNavigate()

    const { firestoreError, firestoreValue, firestoreLoading } = useUserDataWithUid(uid)


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
        <div className={cls.userInfo} onClick={() => navigate(`/user/${uid}`)}>
            <div className={cls.img}>
                <img src={photo} alt="userPhoto"/>
            </div>
            <div className={cls.column}>
                <div className={cls.data}>
                    Display Name: <span>{firstName}</span>
                </div>
                <div className={cls.data}>
                    Email: <span>{email}</span>
                </div>
            </div>
        </div>
    );
};
