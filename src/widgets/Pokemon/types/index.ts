import {Pokemon, PokemonSpecies} from "shared/types";

export interface pokemonNameProps{
    pokemonName: string
}

export interface pokemonComponentsProps{
    pokemon: Pokemon;
    species: PokemonSpecies;
}