import { Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useTheme } from "shared/lib/hooks/useTheme";
import { useUser } from "shared/lib/hooks/useUser";
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
import {NotFind} from "entities/NotFind/model/NotFind";

export const App = () => {

    const { theme } = useTheme()
    const { user, loading, error } = useUser()

    if (loading){
        return <Loading />
    }

    if (error){
        return <NotFind />
    }

    return (
        <div className={classnames('app', {}, [theme])}>
            <Suspense fallback={<Loading />}>
                <Routes>
                    {
                        user !== null ? (
                            <>
                                <Route path={'/users'} element={<UsersPage />}/>
                                <Route path={'/user/:userUID'} element={<UserPage />}/>
                                <Route path={'/profile'} element={<ProfilePage />}/>
                                <Route path={'/'} element={<PokemonsListPage />}/>
                                <Route path={'/pokemon/:pokemonName'} element={<PokemonPage />}/>
                                <Route path={'/*'} element={<Page404 />}/>
                                <Route path={'/auth'} element={<Navigate to={'/'} />} />
                            </>
                        ) : (
                            <>
                                <Route path={'/auth'} element={<AuthPage />}/>
                                <Route path={'/*'} element={<Navigate to={'/auth'} />} />
                            </>
                        )
                    }


                </Routes>
            </Suspense>
        </div>
    )
}