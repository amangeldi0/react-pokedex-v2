import { useTheme } from "shared/lib/hooks/useTheme";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";

import { auth } from "shared/lib/firebase";

import { Layout } from "shared/ui/Layout/Layout";
import { Logo } from "shared/ui/Logo/Logo";

import styles from './UserHeader.module.scss';

export const UserHeader = () => {

    const { theme } = useTheme()
    const [ signOut ] = useSignOut(auth);

    const navigate = useNavigate()
    const bgStyles = theme === 'light' ? {background: '#fff'} : {background: '#404258'}

    const logOut = async (): Promise<void> => {
        await signOut();
        await navigate('/auth')
    }

    return (
        <div style={bgStyles} className={styles.shadow}>
            <Layout>
                <div className={styles.userHeader}>
                    <div>
                        <Logo children={'Profile'} onClick={() => navigate('/')}/>
                    </div>
                    <div className={styles.buttons}>
                        <div className={theme === 'light' ? styles.white : styles.dark}
                             onClick={() => navigate('/users')} >Other users</div>
                        <div className={theme === 'light' ? styles.white : styles.dark}
                             onClick={logOut}>Logout</div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

