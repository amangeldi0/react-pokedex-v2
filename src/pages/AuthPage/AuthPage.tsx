import { AuthHeader } from 'entities/AuthHeader/model/AuthHeader';
import { AuthWithGoogle } from 'features/AuthWithGoogle/model/AuthWithGoogle';
import { Layout } from 'shared/ui/Layout/Layout';

import cls from './AuthPage.module.scss';

const AuthPage = () => (
    <div className={cls.authPage}>
        <AuthHeader />
        <Layout className={cls.center}>
            <AuthWithGoogle />
        </Layout>
    </div>
);

export default AuthPage;
