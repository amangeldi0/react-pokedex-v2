import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { api } from "shared/api/instanse";
import { Pokemon } from "shared/types";

interface getPokemonByNameResponse {
    data: Pokemon;
    isLoading: boolean;
    isError: boolean;
}

export const  getPokemonByName = (name: string): getPokemonByNameResponse => {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['pokemon', name],
        queryFn: async () => await api.get(`pokemon/${name}`).then((data: AxiosResponse) => data.data)
    })

    return {
        data,
        isError,
        isLoading
    }
}