import { useTheme } from 'shared/lib/hooks/useTheme';

import cls from './ErrorPage.module.scss';

const ErrorPage = () => {
    const { theme } = useTheme();

    return (
        <div className={theme === 'light' ? cls.light : cls.dark}>
            <div className={cls.content}>
                <div className={theme === 'light' ? cls.lightTitle : cls.darkTitle}>Oops some program give some error please reload page</div>
                <button type="button" className={theme === 'light' ? cls.buttonLight : cls.buttonDark} onClick={() => window.location.reload()}>Reload</button>
            </div>
        </div>
    );
};

export default ErrorPage;
