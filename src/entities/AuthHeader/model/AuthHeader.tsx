import { Layout } from 'shared/ui/Layout/Layout';
import { Logo } from 'shared/ui/Logo/Logo';

import cls from './AuthHeader.module.scss';

export const AuthHeader = () => (
    <div className={cls.shadow}>
        <Layout>
            <div className={cls.authHeader}>
                <Logo>Authorize</Logo>
                <div />
            </div>
        </Layout>
    </div>
);
