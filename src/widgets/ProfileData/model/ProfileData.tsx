import { UserHeader } from 'entities/UserHeader/model/UserHeader';
import { UserInfo } from 'features/UserInfo/model/UserInfo';
import { UserPokemons } from 'features/UserPokemons/model/UserPokemons';
import { useUser } from 'shared/lib/hooks/useUser';
import { Layout } from 'shared/ui/Layout/Layout';

import styles from './ProfileData.module.scss';

export const ProfileData = () => {
    const { user } = useUser();

    return (
        <div className={styles.userData}>
            <UserHeader />
            <Layout>
                <UserInfo uid={user?.uid} />
                <UserPokemons uid={user?.uid} delButton />
            </Layout>
        </div>
    );
};
