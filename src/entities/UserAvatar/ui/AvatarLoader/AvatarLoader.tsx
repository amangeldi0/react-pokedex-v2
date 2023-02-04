import {useTheme} from "shared/lib/hooks/useTheme";

import styles from './AvatarLoader.module.scss'

export const AvatarLoader = () => {

    const { theme } = useTheme()

    const color = theme === 'light'
        ? {borderColor: '#000 transparent transparent transparent'}
        : {borderColor: '#fff transparent transparent transparent'}

    return (
        <div className={styles.loading}>
            <div className={styles.ldsRing}>
                <div className={styles.div} style={color}></div>
                <div className={styles.div} style={color}></div>
                <div className={styles.div} style={color}></div>
                <div className={styles.div} style={color}></div>
            </div>
        </div>
    );
};

