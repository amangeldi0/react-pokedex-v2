import pika from 'assets/img/pikachu.svg';
import { useNavigate } from 'react-router-dom';

import cls from './NotFind.module.scss';

export const NotFind = () => {
    const navigate = useNavigate();

    return (
        <div className={cls.notFind}>
            <div className={cls.block}>
                <div className={cls.error}>
                    <img src={pika} alt="" />
                </div>
                <div className={cls.title}>Sorry but page not found!</div>
                <button type="button" className={cls.button} onClick={() => navigate(-1)}>Go to back</button>
            </div>
        </div>
    );
};
