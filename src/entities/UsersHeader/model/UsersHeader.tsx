import { useTheme } from "shared/lib/hooks/useTheme";
import { useNavigate } from "react-router-dom";

import { Layout } from "shared/ui/Layout/Layout";

import backArrowBlack from '../../../assets/icon/backArrowBlack.svg';
import backArrowWhite from '../../../assets/icon/backArrow.svg';

import styles from './UsersHeader.module.scss';

export const UsersHeader = () => {

    const { theme } = useTheme()

    const navigate = useNavigate()
    const bgStyles = theme === 'light' ? {background: '#fff'} : {background: '#404258'}

    return (
        <div style={bgStyles} className={styles.shadow}>
            <Layout>
                <div className={styles.header}>
                    <div className={styles.backArrow}>
                        <img src={theme === 'light' ? backArrowBlack : backArrowWhite} alt="back arrow" onClick={() => navigate(-1)}/>
                    </div>
                    <div></div>
                </div>
            </Layout>
        </div>
    );
};