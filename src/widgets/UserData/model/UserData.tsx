import { useTheme } from "shared/lib/hooks/useTheme";

import { UserHeader } from "entities/UserHeader/model/UserHeader";
import { UserInfo } from "features/UserInfo/model/UserInfo";
import { Layout } from "shared/ui/Layout/Layout";
import { UserPokemons } from "features/UserPokemons/model/UserPokemons";

import styles from './UserData.module.scss';

export const UserData = () => {

    const { theme } = useTheme()

    const bgStyles = theme === 'light' ? {background: '#f4f4f4'} : {background: '#474E68'}

    return (
        <div className={styles.userData} style={bgStyles}>
            <UserHeader />
            <Layout>
                <UserInfo />
                <UserPokemons />
            </Layout>
        </div>
    );
};