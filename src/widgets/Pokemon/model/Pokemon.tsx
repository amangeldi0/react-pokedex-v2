import { FC } from 'react';

import { Layout } from "shared/ui/Layout/Layout";


import { pokemonNameProps } from "widgets/Pokemon/types";
import styles from './Pokemon.module.scss';
import {getPokemonByName} from "shared/api/getPokemonByName";
import {PokemonAdditionInfo} from "widgets/Pokemon/ui/PokemonAdditionInfo/PokemonAdditionInfo";
import {PokemonInfo} from "widgets/Pokemon/ui/PokemonInfo/PokemonInfo";
import {getPokemonSpeciesByName} from "shared/api/getPokemonSpeciesByName";
import {PokemonStats} from "widgets/Pokemon/ui/PokemonStats/PokemonStats";
import {PokemonEvolution} from "features/PokemonEvolution/model/PokemonEvolution";
import {PokemonHeader} from "features/PokemonHeader/model/PokemonHeader";
import {useTheme} from "shared/lib/hooks/useTheme";

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
        console.log('some error')
    }

    const bgStyles = theme === 'light' ? {background: '#f4f4f4'} : {background: '#474E68'}


    return (
        <>
            <PokemonHeader color={species.color.name} />
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