import { FC } from "react";


import { useUserData } from "shared/lib/hooks/useUserData";
import { DeletePokemonFromFavourites } from "entities/DeletePokemonFromFavourites/model/DeletePokemonFromFavourites";
import { AddPokemonToFavourite } from "entities/AddPokemonToFavourite/model/AddPokemonToFavourite";

import cls from "./AddToFavourite.module.scss";

interface AddToFavouriteProps  {
    name: string
}

export const AddToFavourite: FC<AddToFavouriteProps> = ({name}) => {


    const { firestoreError, firestoreValue, firestoreLoading } = useUserData()

    if (firestoreLoading){
        return (
            <div className={cls.addToFavorite}>
                <button disabled className={cls.button}>
                    Loading ...
                </button>
            </div>
        )
    }

    if (firestoreError){
        throw new Error(firestoreError.message)
    }

    const inFavourite = firestoreValue.data().pokemons.includes(name)

    return (
        <div className={cls.addToFavorite}>

            {
                inFavourite
                    ?   <DeletePokemonFromFavourites
                            name={name}
                            pokemons={firestoreValue.data()?.pokemons}
                            uid={firestoreValue.data()?.uid}
                            className={cls.button}>Delete from favourite</DeletePokemonFromFavourites>
                    :   <AddPokemonToFavourite
                            name={name}
                            pokemons={firestoreValue.data()?.pokemons}
                            uid={firestoreValue.data()?.uid}
                            className={cls.button}>Add to favourite</AddPokemonToFavourite>
            }
        </div>
    );
};

