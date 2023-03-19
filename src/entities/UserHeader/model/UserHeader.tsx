import { useNavigate } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";

import { auth } from "shared/lib/firebase";

import { Layout } from "shared/ui/Layout/Layout";
import { Logo } from "shared/ui/Logo/Logo";

import cls from './UserHeader.module.scss';

export const UserHeader = () => {

    const [ signOut ] = useSignOut(auth);

    const navigate = useNavigate()

    const logOut = async (): Promise<void> => {
        await signOut();
        await navigate('/auth')
    }

    return (
        <div className={cls.shadow}>
            <Layout>
                <div className={cls.userHeader}>
                    <div>
                        <Logo children={'Profile'} onClick={() => navigate('/')}/>
                    </div>
                    <div className={cls.buttons}>
                        <div className={cls.button}
                             onClick={() => navigate('/users')} >Other users</div>
                        <div className={cls.button}
                             onClick={logOut}>Logout</div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

