import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPokemonByName } from 'shared/api/getPokemonByName';
import { PokemonTypes } from 'shared/ui/PokemonTypes/PokemonTypes';

import { PokemonCardImage } from '../../PokemonCard/ui/PokemonCardImage/PokemonCardImage';
import { PokemonLoader } from '../../PokemonLoader/PokemonLoader';

import cls from './PokemonCard.module.scss';

export const PokemonCard: FC<{name: string}> = ({ name }) => {
    const { data, isError, isLoading } = getPokemonByName(name);

    const navigate = useNavigate();

    if (isLoading) {
        return <PokemonLoader />;
    }

    if (isError) {
        throw new Error('Error with fetching on pokemons(PokemonCard)');
    }

    const { id, sprites, types } = data;

    const imageUrl = sprites.other?.['official-artwork'].front_default;

    return (
        <div
            className={cls.card}
            onClick={() => navigate(`/pokemon/${name}`)}
        >
            <PokemonCardImage url={imageUrl} />
            <div className={cls.number}>
                #
                {id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`}
            </div>
            <div className={cls.name}>{name}</div>
            <PokemonTypes types={types} />
        </div>
    );
};
