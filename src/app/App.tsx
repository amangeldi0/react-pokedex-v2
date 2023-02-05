import { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import { useTheme } from "shared/lib/hooks/useTheme";
import { classnames } from "shared/lib/helpers/classnames/classnames";

import {Loading} from "entities/Loading/model/Loading";

import {
    AuthPage,
    ProfilePage,
    PokemonsListPage,
    UsersPage,
    PokemonPage,
    Page404,
    UserPage
} from 'pages'

import './styles/index.scss'

export const App = () => {

    const { theme } = useTheme()

    return (
        <div className={classnames('app', {}, [theme])}>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={'/auth'} element={<AuthPage />}/>
                    <Route path={'/users'} element={<UsersPage />}/>
                    <Route path={'/user/:userUID'} element={<UserPage />}/>
                    <Route path={'/profile'} element={<ProfilePage />}/>
                    <Route path={'/'} element={<PokemonsListPage />}/>
                    <Route path={'/pokemon/:pokemonName'} element={<PokemonPage />}/>
                    <Route path={'/*'} element={<Page404 />}/>
                </Routes>
            </Suspense>
        </div>
    )
}