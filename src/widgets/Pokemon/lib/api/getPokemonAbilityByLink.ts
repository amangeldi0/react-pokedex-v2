import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

import { Ability } from '../types';

interface getPokemonAbilityByLinkResult {
    data: Ability;
    isError: boolean;
    isLoading: boolean;
}

export const getPokemonAbilityByLink = (link: string) : getPokemonAbilityByLinkResult => {
    const { data, isError, isLoading } = useQuery({

        queryKey: ['ability', link],
        queryFn: () => axios.get(link).then((data:AxiosResponse<Ability>) => data.data),

    });

    return { data, isError, isLoading };
};
