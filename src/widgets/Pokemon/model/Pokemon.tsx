import { FC } from 'react';

import {useTheme} from "shared/lib/hooks/useTheme";
import {getPokemonSpeciesByName} from "shared/api/getPokemonSpeciesByName";
import {getPokemonByName} from "shared/api/getPokemonByName";

import { Layout } from "shared/ui/Layout/Layout";


import { pokemonNameProps } from "widgets/Pokemon/types";

import {PokemonAdditionInfo} from "../ui/PokemonAdditionInfo/PokemonAdditionInfo";
import {PokemonEvolution} from "features/PokemonEvolution/model/PokemonEvolution";
import {PokemonHeader} from "features/PokemonHeader/model/PokemonHeader";
import {PokemonStats} from "../ui/PokemonStats/PokemonStats";
import {PokemonInfo} from "../ui/PokemonInfo/PokemonInfo";

import styles from './Pokemon.module.scss';

export const Pokemon: FC<pokemonNameProps> = ({pokemonName}) => {

    const { theme } = useTheme()

    const {
        data: pokemon,
        isError: pokemonError,
        isLoading: pokemonLoading
    } = getPokemonByName(pokemonName)

    const {
        data: species,
        isError: speciesError,
        isLoading: speciesLoading
    } = getPokemonSpeciesByName(pokemonName)

    if (speciesLoading || pokemonLoading){
        return <div>Loading</div>
    }

    if (pokemonError || speciesError){
        if (pokemonError) throw new Error('Error with fetching on pokemons')
        else  throw new Error('Error with fetching on pokemons species')
    }

    const bgStyles = theme === 'light' ? {background: '#f4f4f4'} : {background: '#474E68'}

    return (
        <>
            <PokemonHeader color={species.color.name} name={pokemonName} />
            <div className={styles.pokemon} style={bgStyles}>
                <Layout className={styles.layout}>
                    <div className={styles.title}>{pokemonName}</div>
                    <div className={styles.allInfo}>
                        <PokemonInfo pokemon={pokemon} species={species} />
                        <div className={styles.pokemonImage}>
                            <img
                                src={pokemon.sprites.other?.['official-artwork'].front_default}
                                alt='pokemonImg'
                            />
                        </div>
                        <PokemonStats pokemon={pokemon} species={species} />
                    </div>

                    <div className={styles.title}>Pokemon evolution chain</div>

                    <PokemonEvolution
                        url={species.evolution_chain.url}
                        curName={pokemonName}
                        color={species.color.name}
                    />

                    <div className={styles.title}>Additional info</div>

                    <PokemonAdditionInfo pokemon={pokemon} species={species} />

                </Layout>
            </div>
        </>

    );
};