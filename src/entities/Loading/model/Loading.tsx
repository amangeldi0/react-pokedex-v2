import spinner from 'assets/pokemon_page_spinner.gif';
import { useTheme } from 'shared/lib/hooks/useTheme';

import cls from './Loading.module.scss';

export const Loading = () => {
    const { theme } = useTheme();

    return (
        <div className={theme === 'light' ? cls.loadingWhite : cls.loading}>
            <img src={spinner} alt="spinner" />
        </div>
    );
};
