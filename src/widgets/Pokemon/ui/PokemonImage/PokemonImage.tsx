import loader from 'assets/loader.gif';
import { FC, useState } from 'react';

import cls from './PokemonImage.module.scss';

interface PokemonImageProps {
    url: string
}

export const PokemonImage: FC<PokemonImageProps> = ({ url }) => {
    const [load, setLoad] = useState<boolean>(true);

    return (
        <div className={cls.pokemonImage}>
            {load
                ? <img src={loader} alt="loading gif" />
                : (
                    <img
                        src={url}
                        alt="pokemon__image"
                        onLoad={() => setLoad(false)}
                    />
                )}
            <img
                src={url}
                alt="pokemon__image"
                onLoad={() => setLoad(false)}
                style={{ display: 'none' }}
            />
        </div>
    );
};
