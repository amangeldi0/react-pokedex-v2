import { getUsersFromFirestore } from "../api/getUsersFromFirestore";

import { User } from "features/UserList/ui/user/User";
import { UserLoading } from "features/UserList/ui/userLoading/UserLoading";

import styles from './UserList.module.scss';


export const UserList = () => {

    const { users, loading, error } = getUsersFromFirestore()

    if (loading) {
        const array = Array.from({length: 10})
        return (
            <div className={styles.userList}>
                {array.map((_arr, index) => <UserLoading key={index} />)}
            </div>
        )
    }

    if (error){
        if (typeof error === 'boolean'){
            throw new Error("Error with fetching on users")
        }else{
            throw new Error(error)
        }
    }


    return (
        <div className={styles.userList}>
            {
                users.map(uid => <User uid={uid} />)
            }
        </div>
    )

};