import { FC } from "react";

import { useUserData } from "shared/lib/hooks/useUserData";
import { useNavigate } from "react-router-dom";
import { getPokemonByName } from "shared/api/getPokemonByName";

import { DeletePokemonFromFavourites} from "../../DeletePokemonFromFavourites/model/DeletePokemonFromFavourites";
import { UserPokemonCardImage } from "../ui/UserPokemonCardImage";


import cls from './UserPokemonCard.module.scss';

interface UserPokemonCardProps {
    name: string;
    delButton: boolean;
}

export const UserPokemonCard: FC<UserPokemonCardProps> = ({name, delButton}) => {

    const { data, isError, isLoading } = getPokemonByName(name)
    const { firestoreError, firestoreValue, firestoreLoading } = useUserData()

    const navigate = useNavigate()


    if (isLoading || firestoreLoading){
        return (
            <div className={cls.pokemonLoading}>
                <div>Loading...</div>
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
        <div className={cls.pokemon}
             onClick={() => navigate(`/pokemon/${name}`)}
        >
            <div className={cls.first}>
                <UserPokemonCardImage url={imageUrl} />
                <div className={cls.name}>
                    {name}
                </div>
            </div>
            {
                delButton ? (
                    <DeletePokemonFromFavourites
                        className={cls.button}
                        pokemons={firestoreValue.data()?.pokemons}
                        name={name}
                        uid={firestoreValue.data()?.uid}>
                        delete
                    </DeletePokemonFromFavourites>
                ) : ''
            }
        </div>
    );
};
