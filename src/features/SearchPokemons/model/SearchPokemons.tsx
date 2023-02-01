import { FC, FormEvent, useState } from 'react';

import { getPokemonNames } from "shared/api/getPokemonNames";
import { SearchList } from "../ui/SearchList/SearchList";

import styles from './SeachPokemon.module.scss'

interface SearchPokemonsProps {
    searchShow: boolean;
    setSearchShow: (show: boolean) => void
}

export const SearchPokemons: FC<SearchPokemonsProps> = ({searchShow, setSearchShow}) => {

    const [search, setSearch] = useState<string>('');
    const {data: pokemons, isError, isLoading} = getPokemonNames(905)


    if (isLoading){
        return <div>Loading</div>
    }

    if (isError){
        console.log('some error')
    }

    const filter = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().trim().includes(search.toLowerCase().trim()))


    return (
        <div className={styles.searchPokemons} >
            <input
                type="text"
                placeholder='Search Pokemon...'
                className={styles.input}
                value={search}
                onChange={(event: FormEvent<HTMLInputElement>) => setSearch(event.currentTarget.value)}
                onClick={() => setSearchShow(true)}
                onFocus={() => setSearchShow(true)}
                role='search'
                tabIndex={1}
            />
            {search.length !== 0 ? <SearchList pokemons={filter}/> : ''}
        </div>
    );
};
