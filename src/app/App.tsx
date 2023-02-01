import { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import { useTheme } from "shared/lib/hooks/useTheme";
import { classnames } from "shared/lib/helpers/classnames/classnames";

import {
    AuthPage,
    UserPage,
    PokemonsListPage,
    UsersPage,
    PokemonPage,
    Page404
} from 'pages'

import './styles/index.scss'

export const App = () => {

    const { theme } = useTheme()

    return (
        <div className={classnames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/auth'} element={<AuthPage />}/>
                    <Route path={'/users'} element={<UsersPage />}/>
                    <Route path={'/user/:userId'} element={<UserPage />}/>
                    <Route path={'/'} element={<PokemonsListPage />}/>
                    <Route path={'/pokemon/:pokemonId'} element={<PokemonPage />}/>
                    <Route path={'/*'} element={<Page404 />}/>
                </Routes>
            </Suspense>
        </div>
    )
}