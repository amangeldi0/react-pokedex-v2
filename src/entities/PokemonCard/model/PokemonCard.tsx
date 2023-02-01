import { FC } from "react";

import { getPokemonByName } from "shared/api/getPokemonByName";
import { PokemonTypes } from "shared/ui/PokemonTypes/PokemonTypes";
import { PokemonCardImage } from "entities/PokemonCard/ui/PokemonCardImage/PokemonCardImage";
import { useTheme } from "shared/lib/hooks/useTheme";
import { PokemonLoader } from "entities/PokemonLoader/PokemonLoader";

import styles from './PokemonCard.module.scss';

export const PokemonCard: FC<{name: string}> = ({name}) => {
    const {data, isError, isLoading} = getPokemonByName(name)
    const {theme} = useTheme()


    if (isLoading){
        return <PokemonLoader />
    }

    if (isError){
        console.log('some error')
    }


    const {id, sprites, types} = data;

    const imageUrl = sprites.other?.['official-artwork'].front_default;

    const bgStyles = theme === 'light' ? {background: '#fff'} : {background: '#6B728E'}

    return (
        <div className={styles.card} style={bgStyles}>
            <PokemonCardImage url={imageUrl}/>
            <div className={styles.number}>
                #{id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`}
            </div>
            <div className={styles.name}>{name}</div>
            <PokemonTypes types={types} />
        </div>
    );
};