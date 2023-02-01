import { useTheme } from "../../lib/hooks/useTheme";
import { Light, Dark } from "./ThemeIcons";


import styles from './Theme.module.scss';

export const Theme = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={styles.theme} onClick={() => toggleTheme()}>
            {
                theme === 'light' ? <Light /> : <Dark />
            }
        </div>
    );
};
