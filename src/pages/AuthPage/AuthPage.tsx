import { AuthHeader } from "entities/AuthHeader/model/AuthHeader";
import { Layout } from "shared/ui/Layout/Layout";
import { AuthWithGoogle } from "features/AuthWithGoogle/model/AuthWithGoogle";

import cls from './AuthPage.module.scss';

const AuthPage = () => {


    return (
        <div className={cls.authPage}>
            <AuthHeader />
            <Layout className={cls.center}>
                <AuthWithGoogle />
            </Layout>
        </div>
    );
};

export default AuthPage;