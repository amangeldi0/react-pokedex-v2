import { useNavigate } from 'react-router-dom';
import { useUser } from 'shared/lib/hooks/useUser';

import { AvatarLoader } from '../ui/AvatarLoader/AvatarLoader';

import cls from './UserAvatar.module.scss';

export const UserAvatar = () => {
    const { user, loading, error } = useUser();

    const navigate = useNavigate();

    if (error) {
        throw new Error(error.message);
    }

    return (
        <div className={cls.avatar}>
            {loading
                ? <AvatarLoader />
                : (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <img
                        onClick={() => navigate('/profile')}
                        src={user?.photoURL}
                        alt="userPhoto"
                    />
                )}
        </div>
    );
};
