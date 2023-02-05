import { getUsersFromFirestore } from "../api/getUsersFromFirestore";

import { User } from "features/UserList/ui/user/User";
import { UserLoading} from "features/UserList/ui/userLoading/UserLoading";

import styles from './UserList.module.scss';

export const UserList = () => {

    const {users, loading, error} = getUsersFromFirestore()

    if (loading){
        const array: undefined[] = Array.from({length: 4})
        return (
            <div className={styles.userList}>
                {array.map((_arr, index) =>
                    <UserLoading key={index} />)}
            </div>
        )
    }

    if (error){
        if (typeof error === 'boolean'){
            throw new Error('Error with getting users from Firestore (UserList)')
        }else throw new Error(error)
    }

    return (
        <div className={styles.userList}>
            {
                users.map(uid => <User uid={uid} key={uid} /> )
            }
        </div>
    );
};