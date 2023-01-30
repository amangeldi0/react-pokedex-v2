import {Routes, Route, Link} from "react-router-dom";
import {Suspense} from "react";
import './styles/index.scss'
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {useTheme} from "../Theme/ThemeContext/useTheme";
import { classnames } from "../helpers/classnames/classnames";
export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classnames('app', {}, [theme])}>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <button onClick={() => toggleTheme()}>Change theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}