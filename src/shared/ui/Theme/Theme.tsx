import { useTheme } from '../../lib/hooks/useTheme';
import { Dark, Light } from './ThemeIcons';

import cls from './Theme.module.scss';

export const Theme = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cls.theme} onClick={() => toggleTheme()}>
            {
                theme === 'light' ? <Light /> : <Dark />
            }
        </div>
    );
};
