import { useUserData } from "shared/lib/hooks/useUserData";
import { useTheme } from "shared/lib/hooks/useTheme";

import {UserPokemonCard} from "entities/UserPokemonCard/model/UserPokemonCard";

import styles from './UserPokemons.module.scss';

export const UserPokemons = () => {

    const { firestoreValue, firestoreLoading, firestoreError } = useUserData();
    const { theme } = useTheme();

    const bgStyle = theme === 'light'
        ? {background: '#fff'}
        : {background: 'rgba(255, 255, 255, 0.06)'}



    if (firestoreLoading){
        const array: undefined[] = Array.from({ length: 5 })
        return (
            <>
                {array.map((_under, index) =>
                    <div style={bgStyle} className={styles.loading} key={index}>Loading...</div>
                )}
            </>

        )
    }

    if (firestoreError){
        throw new Error(firestoreError.message)
    }

    const pokemons: string[] = firestoreValue?.data().pokemons

    return (
        <div className={styles.tr}>
            {pokemons && pokemons.map((pokemon) => <UserPokemonCard key={pokemon} name={pokemon}/>)}
        </div>
    );
};
