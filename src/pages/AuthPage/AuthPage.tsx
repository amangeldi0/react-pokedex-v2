import { useTheme } from "shared/lib/hooks/useTheme";

import { AuthHeader } from "entities/AuthHeader/model/AuthHeader";
import { Layout } from "shared/ui/Layout/Layout";
import { AuthWithGoogle } from "features/AuthWithGoogle/model/AuthWithGoogle";

import styles from './AuthPage.module.scss';

const AuthPage = () => {

    const {theme} = useTheme()

    const bgStyles = theme === 'light' ? {background: '#f4f4f4'} : {background: '#474E68'}
    return (
        <div style={bgStyles} className={styles.authPage}>
            <AuthHeader />
            <Layout className={styles.center}>
                <AuthWithGoogle />
            </Layout>
        </div>
    );
};

export default AuthPage;