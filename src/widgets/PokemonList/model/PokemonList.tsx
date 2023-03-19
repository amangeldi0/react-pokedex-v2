import { GoUp } from 'entities/GoUp/Model/GoUp';
import { PokemonCard } from 'entities/PokemonCard/model/PokemonCard';
import { PokemonLoader } from 'entities/PokemonLoader/PokemonLoader';
import { FC, useEffect, useState } from 'react';
import { getPokemonNames } from 'shared/api/getPokemonNames';
import { Layout } from 'shared/ui/Layout/Layout';

import { useInView } from '../lib/hooks/useInView';

import cls from './PokemonList.module.scss';

export const PokemonList:FC = () => {
    const [limit, setLimit] = useState<number>(45);

    const { data, isError, isLoading } = getPokemonNames(limit);

    const [scroll, setScroll] = useState<number>(0);

    const { ref, inView } = useInView();

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (inView && limit < 905 && !isLoading && !isError) {
            setLimit((prevState) => prevState + 40);
        }
    }, [inView, isError, isLoading, limit]);

    if (isError) {
        throw new Error('Error fetching on pokemons (Pokemon List)');
    }

    if (isLoading) {
        const array: undefined[] = Array.from({ length: limit });
        return (
            <div className={cls.pokemonsBlock}>
                <Layout className={cls.pokemons}>
                    {/* eslint-disable-next-line react/no-array-index-key */}
                    {array.map((_arr, index) => <PokemonLoader key={index} />)}
                </Layout>
            </div>
        );
    }

    return (
        <div className={cls.pokemonsBlock}>
            <Layout className={cls.pokemons}>
                {
                    data?.map((pokemon) => <PokemonCard name={pokemon.name} key={pokemon.name} />)
                }
            </Layout>
            <div className={cls.text} ref={ref}>{limit >= 905 ? 'That\'s all pokemon' : 'Please wait Pokemons is loading... if pokemon not loading try to re scroll'}</div>
            {scroll > 300 ? <GoUp /> : ''}
        </div>

    );
};
