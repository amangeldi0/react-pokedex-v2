import cls from './AvatarLoader.module.scss';

export const AvatarLoader = () => (
    <div className={cls.loading}>
        <div className={cls.ldsRing}>
            <div className={cls.div} />
            <div className={cls.div} />
            <div className={cls.div} />
            <div className={cls.div} />
        </div>
    </div>
);
