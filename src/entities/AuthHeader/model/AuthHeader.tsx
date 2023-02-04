import { useTheme } from "shared/lib/hooks/useTheme";

import { Layout } from "shared/ui/Layout/Layout";
import { Logo } from "shared/ui/Logo/Logo";

import styles from './AuthHeader.module.scss';

export const AuthHeader = () => {

    const { theme } = useTheme()

    const bgStyles = theme === 'light' ? {background: '#fff'} : {background: '#404258'}

    return (
        <div className={styles.shadow} style={bgStyles}>
            <Layout>
                <div className={styles.authHeader}>
                    <Logo children={'Authorize'}/>
                    <div></div>
                </div>
            </Layout>
        </div>
    );
};