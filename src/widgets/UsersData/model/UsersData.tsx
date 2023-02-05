import { useTheme } from "shared/lib/hooks/useTheme";

import { UsersHeader } from "entities/UsersHeader/model/UsersHeader";
import { UserList } from "features/UserList/model/UserList";
import { Layout } from "shared/ui/Layout/Layout";

import styles from './UsersData.module.scss';

export const UsersData = () => {

    const { theme } = useTheme()

    const bgStyle = theme === 'light' ? {background: '#f4f4f4'} : {background: '#474E68'}
    return (
        <div style={bgStyle} className={styles.data}>
            <UsersHeader />
            <Layout>
                <UserList />
            </Layout>

        </div>
    );
};
