import { FC, ComponentPropsWithRef, MouseEvent } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "shared/lib/firebase";

interface DeletePokemonFromFavouritesProps extends ComponentPropsWithRef<'button'>{
    name: string,
    pokemons: string[];
    uid: string;
}

export const DeletePokemonFromFavourites: FC<DeletePokemonFromFavouritesProps> =
    ({ name,pokemons, uid, className, children, style }) => {

        const deleteFavourite = async (e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()

            const array = pokemons.filter((pokemon: string) => pokemon !== name);

            const userFirestoreRef = doc(db, "users", uid);

            await updateDoc(userFirestoreRef, {
                pokemons: array
            });

            await alert('Pokemon successful removed');
        };

    return (
        <button onClick={(event) => deleteFavourite(event)} className={className} style={style}>
            {children}
        </button>
    );
};