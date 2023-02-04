import { FC, KeyboardEvent } from "react";
import { useTheme } from "shared/lib/hooks/useTheme";
import { useNavigate } from "react-router-dom";

import { PokemonNameUrl } from "shared/types";

import styles from './SearchList.module.scss'

interface SearchListProps {
    pokemons: PokemonNameUrl[]
}

export const SearchList: FC<SearchListProps> = ({pokemons}) => {

    const { theme } = useTheme();

    const navigate = useNavigate()

    const onHandlesSearch = (name: string): void => {
        navigate(`/pokemon/${name} `);
    };

    const onHandlesSearchEnter = (event: KeyboardEvent<HTMLLIElement>, name: string): void => {
        if (event.key === 'Enter') {
            navigate(`/pokemon/${name} `);
        }
    };

    const style = theme === 'light' ? {background: 'white'} : {background: '#474E68'}


    return (
        <>{
            (<div className={styles.searchList} style={style}>
                {pokemons.length !== 0
                    ? pokemons.map(pokemon => {
                        return (
                            <li key={pokemon.name}
                                role='button'
                                tabIndex={1}
                                onClick={() => onHandlesSearch(pokemon.name)}
                                onKeyDown={(event: KeyboardEvent<HTMLLIElement>) =>
                                    onHandlesSearchEnter(event, pokemon.name)}
                            >{pokemon.name}</li>
                        );
                    })
                    : <li>Nothing not found</li>}
            </div>)
        }</>
    );
};

