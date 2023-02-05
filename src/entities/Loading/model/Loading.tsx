import {useTheme} from "shared/lib/hooks/useTheme";

import spinner from '../../../assets/pokemon_page_spinner.gif';

import styles from './Loading.module.scss';

export const Loading = () => {

    const { theme } = useTheme()

    const bgStyles = theme === 'light' ? {background: '#fff'} : {background: '#404258'}

    return (
        <div className={styles.loading} style={bgStyles}>
            <img src={spinner} alt="spinner"/>
        </div>
    );
};
