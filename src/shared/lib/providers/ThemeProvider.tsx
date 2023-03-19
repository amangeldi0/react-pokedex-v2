import {
    FC, ReactNode, useMemo, useState,
} from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from '../context/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;

export interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Themes>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
    );
};
