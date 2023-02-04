import { FC } from "react";

import { getPokemonByName } from "shared/api/getPokemonByName";
import { useTheme } from "shared/lib/hooks/useTheme";
import { useNavigate } from "react-router-dom";

import { PokemonTypes } from "shared/ui/PokemonTypes/PokemonTypes";
import { PokemonCardImage } from "../../PokemonCard/ui/PokemonCardImage/PokemonCardImage";
import { PokemonLoader } from "../../PokemonLoader/PokemonLoader";

import styles from './PokemonCard.module.scss';

export const PokemonCard: FC<{name: string}> = ({name}) => {


    const { data, isError, isLoading } = getPokemonByName(name);

    const { theme } = useTheme();
    const navigate = useNavigate();


    if (isLoading){
        return <PokemonLoader />;
    }

    if (isError){
        throw new Error("Error with fetching on pokemons(PokemonCard)")
    }

    const { id, sprites, types } = data;

    const imageUrl = sprites.other?.['official-artwork'].front_default;

    const bgStyles = theme === 'light' ? {background: '#fff'} : {background: '#6B728E'}

    return (
        <div className={styles.card}
             style={bgStyles} onClick={() => navigate(`/pokemon/${name}`)}>
            <PokemonCardImage url={imageUrl}/>
            <div className={styles.number}>
                #{id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`}
            </div>
            <div className={styles.name}>{name}</div>
            <PokemonTypes types={types} />
        </div>
    );
};