import { useTheme } from "shared/lib/hooks/useTheme";
import {useUser} from "shared/lib/hooks/useUser";

import { UserHeader } from "entities/UserHeader/model/UserHeader";
import { UserInfo } from "features/UserInfo/model/UserInfo";
import { Layout } from "shared/ui/Layout/Layout";
import { UserPokemons } from "features/UserPokemons/model/UserPokemons";

import styles from './ProfileData.module.scss';

export const ProfileData = () => {

    const { theme } = useTheme()
    const { user } = useUser()

    const bgStyles = theme === 'light' ? {background: '#f4f4f4'} : {background: '#474E68'}

    return (
        <div className={styles.userData} style={bgStyles}>
            <UserHeader />
            <Layout>
                <UserInfo uid={user?.uid}/>
                <UserPokemons uid={user?.uid} delButton={true}/>
            </Layout>
        </div>
    );
};