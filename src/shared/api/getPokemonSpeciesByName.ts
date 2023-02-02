import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { api } from "../api/instanse";
import { PokemonSpecies} from "../types";

interface getPokemonSpeciesByNameResponse {
    data: PokemonSpecies;
    isLoading: boolean;
    isError: boolean;
}

export const  getPokemonSpeciesByName = (name: string): getPokemonSpeciesByNameResponse => {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['pokemon-species', name],
        queryFn: async () => await api.get(`pokemon-species/${name}`).then((data: AxiosResponse) => data.data)
    })

    return {
        data,
        isError,
        isLoading
    }
}