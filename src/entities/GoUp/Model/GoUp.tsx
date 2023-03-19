import arrow from 'assets/icon/arrow.svg'
import cls from './GoUp.module.scss';

export const GoUp = () => {

    const handleUpButton = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={cls.goUp} onClick={handleUpButton}>
            <img src={arrow} alt='arrow' />
        </div>
    );
};
