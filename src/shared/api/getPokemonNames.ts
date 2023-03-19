import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { api } from 'shared/api/instanse';
import { getPokemonNamesResponse, PokemonNameUrl } from 'shared/types';

interface getPokemonNamesFuncResponse {
    data: PokemonNameUrl[];
    isLoading: boolean;
    isError: boolean;
}

const requestPokemons = async (limit: number) => {
    if (limit >= 905) {
        return api
            .get<getPokemonNamesResponse>(`/pokemon?limit=${905}&offset=0`)
            .then((data: AxiosResponse) => data.data);
    }
    return api
        .get<getPokemonNamesResponse>(`/pokemon?limit=${limit}&offset=0`)
        .then((data: AxiosResponse) => data.data);
};

export const getPokemonNames = (limit: number): getPokemonNamesFuncResponse => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['pokemons', limit],
        queryFn: () => requestPokemons(limit),
        keepPreviousData: true,
    });

    return {
        data: data?.results,
        isError,
        isLoading,
    };
};
