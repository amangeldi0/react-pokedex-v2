import cls from './PokemonLoader.module.scss';

export const PokemonLoader = () => (
    <div className={cls.skeleton}>
        <div className={cls.number} />
        <div className={cls.types}>
            <div className={cls.circle} />
            <div className={cls.circle} />
        </div>
        <div className={cls.image} />
        <div className={cls.name} />
    </div>
);
