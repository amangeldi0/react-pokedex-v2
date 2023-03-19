import { Loading } from 'entities/Loading/model/Loading';
import { NotFind } from 'entities/NotFind/model/NotFind';
import {
    AuthPage,
    Page404,
    PokemonPage,
    PokemonsListPage,
    ProfilePage,
    UserPage,
    UsersPage,
} from 'pages';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { classnames } from 'shared/lib/helpers/classnames/classnames';
import { useTheme } from 'shared/lib/hooks/useTheme';
import { useUser } from 'shared/lib/hooks/useUser';

import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();
    const { user, loading, error } = useUser();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <NotFind />;
    }

    return (
        <div className={classnames('app', {}, [theme])}>
            <Suspense fallback={<Loading />}>
                <Routes>
                    {
                        user !== null ? (
                            <>
                                <Route path="/users" element={<UsersPage />} />
                                <Route path="/user/:userUID" element={<UserPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="/" element={<PokemonsListPage />} />
                                <Route path="/pokemon/:pokemonName" element={<PokemonPage />} />
                                <Route path={'/*'} element={<Page404 />} />
                                <Route path="/auth" element={<Navigate to="/" />} />
                            </>
                        ) : (
                            <>
                                <Route path="/auth" element={<AuthPage />} />
                                <Route path={'/*'} element={<Navigate to="/auth" />} />
                            </>
                        )
                    }

                </Routes>
            </Suspense>
        </div>
    );
};
