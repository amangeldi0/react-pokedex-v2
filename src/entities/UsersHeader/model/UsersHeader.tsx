import backArrowWhite from 'assets/icon/backArrow.svg';
import backArrowBlack from 'assets/icon/backArrowBlack.svg';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'shared/lib/hooks/useTheme';
import { Layout } from 'shared/ui/Layout/Layout';

import cls from './UsersHeader.module.scss';

export const UsersHeader = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <div className={cls.shadow}>
            <Layout>
                <div className={cls.header}>
                    <div className={cls.backArrow}>
                        <img src={theme === 'light' ? backArrowBlack : backArrowWhite} alt="back arrow" onClick={() => navigate(-1)} />
                    </div>
                    <div />
                </div>
            </Layout>
        </div>
    );
};
