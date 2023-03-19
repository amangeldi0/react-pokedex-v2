import cls from './PokemonLoader.module.scss';

export const PokemonLoader = () => {

    return (
        <div className={cls.skeleton}>
            <div className={cls.number}></div>
            <div className={cls.types}>
                <div className={cls.circle}></div>
                <div className={cls.circle}></div>
            </div>
            <div className={cls.image}></div>
            <div className={cls.name}></div>
        </div>
    );
};
