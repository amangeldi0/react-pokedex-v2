import loader from 'assets/loader.gif';
import { FC, useState } from 'react';

import cls from './UserPokemonCardImage.module.scss';

interface UserPokemonCardImageProps {
    url: string
}

export const UserPokemonCardImage: FC<UserPokemonCardImageProps> = ({ url }) => {
    const [load, setLoad] = useState<boolean>(true);

    return (
        <>
            {load
                ? <img src={loader} alt="loading gif" className={cls.image} />
                : (
                    <img
                        src={url}
                        alt="pokemonImage"
                        className={cls.image}
                        onLoad={() => setLoad(false)}
                    />
                )}
            <img
                src={url}
                alt="pokemonImage"
                className={cls.image}
                onLoad={() => setLoad(false)}
                style={{ display: 'none' }}
            />
        </>
    );
};
