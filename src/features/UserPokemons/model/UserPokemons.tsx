import { FC } from 'react';

import { useUserDataWithUid } from "shared/lib/hooks/useUserDataWithUid";

import { UserPokemonCard } from "entities/UserPokemonCard/model/UserPokemonCard";

import cls from './UserPokemons.module.scss';

interface UserPokemonsProps {
    uid: string
    delButton: boolean
}

export const UserPokemons: FC<UserPokemonsProps> = ({uid, delButton}) => {
    const { firestoreValue, firestoreLoading, firestoreError } = useUserDataWithUid(uid);

    if (firestoreLoading){
        const array: undefined[] = Array.from({ length: 5 })
        return (
            <>
                {array.map((_under, index) =>
                    <div className={cls.loading} key={index}>Loading...</div>
                )}
            </>

        )
    }

    if (firestoreError){
        throw new Error(firestoreError.message)
    }

    const pokemons: string[] = firestoreValue?.data().pokemons

    return (
        <div className={cls.tr}>
            {pokemons.length !== 0
                ? pokemons.map((pokemon) => <UserPokemonCard key={pokemon} name={pokemon} delButton={delButton}/>)
                : <div className={cls.title}>There are no added Pokemon</div>
            }
        </div>
    );
};
