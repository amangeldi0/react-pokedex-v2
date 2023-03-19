import { useTheme } from "shared/lib/hooks/useTheme";
import { useNavigate } from "react-router-dom";

import { Layout } from "shared/ui/Layout/Layout";

import backArrowBlack from 'assets/icon/backArrowBlack.svg';
import backArrowWhite from 'assets/icon/backArrow.svg';

import cls from './UsersHeader.module.scss';

export const UsersHeader = () => {

    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <div className={cls.shadow}>
            <Layout>
                <div className={cls.header}>
                    <div className={cls.backArrow}>
                        <img src={theme === 'light' ? backArrowBlack : backArrowWhite} alt="back arrow" onClick={() => navigate(-1)}/>
                    </div>
                    <div></div>
                </div>
            </Layout>
        </div>
    );
};