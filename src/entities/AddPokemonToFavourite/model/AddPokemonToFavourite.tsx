import { ComponentPropsWithRef, FC } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "shared/lib/firebase";

interface AddPokemonToFavouriteProps extends ComponentPropsWithRef<'button'>{
    name: string,
    pokemons: string[];
    uid: string;
}

export const AddPokemonToFavourite: FC<AddPokemonToFavouriteProps> =
    ({ name,pokemons, uid, className, children }) => {

        const addFavourite = async () => {
            const userFirestoreRef = doc(db, "users", uid);
            await updateDoc(userFirestoreRef, {
                pokemons: [...pokemons, name]
            });
            await alert('Pokemon successful added');
        };

        return (
            <button onClick={addFavourite} className={className}>
                {children}
            </button>
        );
    };