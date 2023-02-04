import { FC } from "react";

import { useUserData } from "shared/lib/hooks/useUserData";
import { useNavigate } from "react-router-dom";
import { useTheme } from "shared/lib/hooks/useTheme";
import { getPokemonByName } from "shared/api/getPokemonByName";

import { DeletePokemonFromFavourites} from "../../DeletePokemonFromFavourites/model/DeletePokemonFromFavourites";

import styles from './UserPokemonCard.module.scss';
import {UserPokemonCardImage} from "entities/UserPokemonCard/ui/UserPokemonCardImage";

export const UserPokemonCard: FC<{name: string}> = ({name}) => {

    const { data, isError, isLoading } = getPokemonByName(name)
    const { firestoreError, firestoreValue, firestoreLoading } = useUserData()
    const { theme } = useTheme()

    const navigate = useNavigate()

    const bgStyle = theme === 'light'
        ? {background: '#fff'}
        : {background: 'rgba(255, 255, 255, 0.06)'}

    const colors = theme === 'light'
        ? {color: '#000'}
        : {color: '#fff'}


    if (isLoading || firestoreLoading){
        return (
            <div className={styles.pokemonLoading} style={bgStyle}>
                <div>Loading...</div>
                <div></div>
            </div>
        )
    }


    if (isError || firestoreError){
        if (firestoreError){
            throw new Error(firestoreError.message)
        }else {
            throw new Error('Error with fetching on pokemons (UserPokemonCard)')
        }
    }

    const imageUrl = data.sprites.other?.['official-artwork'].front_default;

    return (
        <div className={styles.pokemon}
             onClick={() => navigate(`/pokemon/${name}`)}
             style={bgStyle}
        >
            <div className={styles.first}>
                <UserPokemonCardImage url={imageUrl} />
                <div className={styles.name}>
                    {name}
                </div>
            </div>
            <DeletePokemonFromFavourites
                className={styles.button}
                pokemons={firestoreValue.data()?.pokemons}
                style={colors}
                name={name}
                uid={firestoreValue.data()?.uid}>
                delete
            </DeletePokemonFromFavourites>
        </div>
    );
};
