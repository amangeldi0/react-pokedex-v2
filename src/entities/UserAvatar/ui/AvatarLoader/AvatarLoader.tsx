import cls from './AvatarLoader.module.scss'

export const AvatarLoader = () => {


    return (
        <div className={cls.loading}>
            <div className={cls.ldsRing}>
                <div className={cls.div}></div>
                <div className={cls.div}></div>
                <div className={cls.div}></div>
                <div className={cls.div}></div>
            </div>
        </div>
    );
};

