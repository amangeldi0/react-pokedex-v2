import loader from 'assets/loader.gif';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPokemonByName } from 'shared/api/getPokemonByName';
import { colors } from 'shared/lib/constants/colors';

import { EvoCardImage } from '../ui/EvoCardImage';

import cls from './EvoCard.module.scss';

interface EvoCardProps{
    name: string;
    curName: string;
    color: string
}
export const EvoCard: FC<EvoCardProps> = ({ name, curName, color }) => {
    const { data, isLoading, isError } = getPokemonByName(name);

    const navigate = useNavigate();

    if (isLoading) {
        return (
            <div
                className={cls.EvoCard}
                style={{ justifyContent: 'center' }}
            >
                <img src={loader} alt="loader" className={cls.image__loader} />
            </div>
        );
    }

    if (isError) {
        throw new Error('Error with fetching on pokemons(EvoCard)');
    }

    const { id, sprites } = data;

    const bg = { color: colors[color] };

    return (
        <div
            className={cls.EvoCard}
            onClick={() => navigate(`/pokemon/${name}`)}
        >
            <EvoCardImage url={sprites.other?.['official-artwork'].front_default} />
            <div className={cls.id} style={curName === name ? bg : {}}>
                #
                {id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`}
            </div>
            <div className={cls.name} style={curName === name ? bg : {}}>
                {name}
            </div>
        </div>
    );
};
