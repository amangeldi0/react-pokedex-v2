import { FC, useEffect } from 'react'

import { useTheme } from "shared/lib/hooks/useTheme";
import { useNavigate } from "react-router-dom";

import styles from './NotFind.module.scss';
import pika from '../../../assets/img/pikachu.svg'

interface NotFindProps {
    error?: string
}

export const NotFind: FC<NotFindProps> = ({error}) => {

    const { theme } = useTheme()

    const navigate = useNavigate()

    const bgStyles = theme === 'light' ? {background: '#fff'} : {background: '#404258'}
    const blockStyles = theme === 'light' ? {background: '#f4f4f4'} : {background: '#474E68'}
    const buttonStyles = theme === 'light' ? {color: '#000'} : {color: '#fff'}

    useEffect(() => {
        console.log(error)
    }, []);

    return (
        <div className={styles.notfind} style={bgStyles}>
            <div className={styles.block} style={blockStyles}>
                <div className={styles.error}>
                    <img src={pika} alt=""/>
                </div>
                <div className={styles.title}>Sorry but page not found!</div>
                <button style={buttonStyles} className={styles.button} onClick={() => navigate(-1)}>Go to back</button>
            </div>
        </div>
    );
};

