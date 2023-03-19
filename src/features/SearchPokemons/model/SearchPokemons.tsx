import { FC, FormEvent, useState } from 'react';

import { getPokemonNames } from "shared/api/getPokemonNames";
import {useOutsideClick} from "../lib/hooks/useOutsideClick";

import { SearchList } from "../ui/SearchList/SearchList";

import cls from './SeachPokemon.module.scss'

interface SearchPokemonsProps {
    searchShow: boolean;
}

export const SearchPokemons: FC<SearchPokemonsProps> = ({searchShow}) => {

    const [search, setSearch] = useState<string>('');

    const { data: pokemons, isError, isLoading } = getPokemonNames(905);

    const { ref, show, setShow } = useOutsideClick({ initialIsVisible: searchShow, setSearch });

    if (isLoading){
        return <div className={cls.searchPokemons}>Loading</div>
    }

    if (isError){
        throw new Error('Error with get name for search (SearchPokemons)')
    }

    const filter = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().trim().includes(search.toLowerCase().trim()))


    return (
        <div className={cls.searchPokemons} ref={ref}>
            <input
                type="text"
                placeholder='Search Pokemon...'
                className={cls.input}
                value={search}
                onChange={(event: FormEvent<HTMLInputElement>) => setSearch(event.currentTarget.value)}
                onClick={() => setShow(true)}
                onFocus={() => setShow(true)}
                role='search'
                tabIndex={1}
            />
            <div className={show ? '' : cls.hidden}>
                {search.length !== 0 ? <SearchList pokemons={filter}/> : ''}
            </div>
        </div>
    );
};
