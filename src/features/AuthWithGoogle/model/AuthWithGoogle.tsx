import { useTheme } from "shared/lib/hooks/useTheme";
import { authWithGoogleProvider } from "../lib/helpers/authWithGoogleProvider";

import styles from './AuthWithGoogle.module.scss';
import loader from '../../../assets/loader.gif'


export const AuthWithGoogle = () => {

    const { theme } = useTheme()
    const { toWithGoogle, googleLoading, googleError } = authWithGoogleProvider()

    const bgStyles = theme === 'light'
        ? {background: 'white'}
        : {background: '#404258'}

    const buttonBg = theme === 'light'
        ? {background: '#f5f5f5', color: '#000', border: '1px solid black'}
        : {background: '#474E68', color: '#fff'}

    if (googleError){
        throw new Error('Error with register on AuthWithGoogle')
    }

    if (googleLoading){
        return (
            <div className={styles.authWithGoogleLoader} style={bgStyles}>
                <img src={loader} alt="loader" className={styles.loader}/>
                <div className={styles.loading}>Loading...</div>
            </div>
        );
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
