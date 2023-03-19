
import spinner from 'assets/pokemon_page_spinner.gif';

import cls from './Loading.module.scss';

export const Loading = () => {

    return (
        <div className={cls.loading}>
            <img src={spinner} alt="spinner"/>
        </div>
    );
};
