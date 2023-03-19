import { Loading } from 'entities/Loading/model/Loading';
import { NotFind } from 'entities/NotFind/model/NotFind';
import { UsersHeader } from 'entities/UsersHeader/model/UsersHeader';
import { UserInfo } from 'features/UserInfo/model/UserInfo';
import { getUsersFromFirestore } from 'features/UserList/api/getUsersFromFirestore';
import { UserPokemons } from 'features/UserPokemons/model/UserPokemons';
import { useParams } from 'react-router-dom';
import { Layout } from 'shared/ui/Layout/Layout';

import cls from './UserData.module.scss';

export const UserData = () => {
    const { userUID } = useParams();

    const { users, loading, error } = getUsersFromFirestore();

    if (loading) {
        return <Loading />;
    }

    if (!users.includes(userUID) || error) {
        return <NotFind />;
    }

    return (
        <div className={cls.userData}>
            <UsersHeader />

            <Layout>
                <UserInfo uid={userUID} />
                <UserPokemons uid={userUID} delButton={false} />
            </Layout>
        </div>
    );
};
