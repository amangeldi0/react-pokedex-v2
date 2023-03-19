import { Layout } from "shared/ui/Layout/Layout";
import { Logo } from "shared/ui/Logo/Logo";

import cls from './AuthHeader.module.scss';

export const AuthHeader = () => {
    return (
        <div className={cls.shadow}>
            <Layout>
                <div className={cls.authHeader}>
                    <Logo children={'Authorize'}/>
                    <div></div>
                </div>
            </Layout>
        </div>
    );
};