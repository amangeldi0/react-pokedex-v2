import { useTheme } from "shared/lib/hooks/useTheme";
import { authWithGoogleProvider } from "../lib/helpers/authWithGoogleProvider";

import {Loading} from "entities/Loading/model/Loading";

import styles from './AuthWithGoogle.module.scss';

export const AuthWithGoogle = () => {



    const { theme } = useTheme()

    const { toWithGoogle, googleLoading } = authWithGoogleProvider()

    const bgStyles = theme === 'light'
        ? {background: 'white'}
        : {background: '#404258'}

    const buttonBg = theme === 'light'
        ? {background: '#f5f5f5', color: '#000', border: '1px solid black'}
        : {background: '#474E68', color: '#fff'}

    if (googleLoading){
        return <Loading />
    }

    return (
        <div className={styles.authWithGoogle} style={bgStyles}>
            <div className={styles.authTitle}>Welcome!</div>
            <button
                className={styles.auth}
                style={buttonBg}
                onClick={async () => await toWithGoogle()}
            >Continue with Google</button>
        </div>
    );
};
