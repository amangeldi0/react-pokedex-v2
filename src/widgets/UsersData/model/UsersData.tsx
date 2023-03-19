import { UsersHeader } from 'entities/UsersHeader/model/UsersHeader';
import { UserList } from 'features/UserList/model/UserList';
import { Layout } from 'shared/ui/Layout/Layout';

import cls from './UsersData.module.scss';

export const UsersData = () => (
    <div className={cls.usersData}>
        <UsersHeader />
        <Layout>
            <UserList />
        </Layout>

    </div>
);
