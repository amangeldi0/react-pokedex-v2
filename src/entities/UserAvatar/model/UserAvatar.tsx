import { useUser } from "shared/lib/hooks/useUser";
import { useNavigate } from "react-router-dom";

import { AvatarLoader } from "../ui/AvatarLoader/AvatarLoader";

import styles from './UserAvatar.module.scss'

export const UserAvatar = () => {

    const { user, loading, error } = useUser()

    const navigate = useNavigate()

    if (error){
        throw new Error(error.message)
    }

    return (
        <div className={styles.avatar}>
            {loading
                ? <AvatarLoader />
                : <img onClick={() => navigate('/profile')}
                    src={user?.photoURL} alt="userPhoto"/>
            }
        </div>
    );
};

