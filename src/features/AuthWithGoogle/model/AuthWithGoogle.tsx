import { Loading } from 'entities/Loading/model/Loading';

import { authWithGoogleProvider } from '../lib/helpers/authWithGoogleProvider';

import cls from './AuthWithGoogle.module.scss';

export const AuthWithGoogle = () => {
    const { toWithGoogle, googleLoading, googleError } = authWithGoogleProvider();

    if (googleError) {
        throw new Error('Something wrong with google sing-in error');
    }

    if (googleLoading) {
        return <Loading />;
    }

    return (
        <div className={cls.authWithGoogle}>
            <div className={cls.authTitle}>Welcome!</div>
            <button
                type="button"
                className={cls.auth}
                onClick={() => toWithGoogle()}
            >
                Continue with Google
            </button>
        </div>
    );
};
