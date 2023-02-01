import { useUser } from "shared/lib/hooks/useUser";
import { AvatarLoader } from "../ui/AvatarLoader/AvatarLoader";

import styles from './UserAvatar.module.scss'

export const UserAvatar = () => {

    const {user, loading, error} = useUser()

    if (error){
        console.log(error.message)
    }

    return (
        <div className={styles.avatar}>
            {loading
                ? <AvatarLoader />
                : <img src={user?.photoURL} alt="userPhoto"/>
            }
        </div>
    );
};

