import { EvoCard } from 'entities/EvoCard/model/EvoCard';
import { FC, useEffect, useState } from 'react';
import { EvolutionDetail } from 'shared/types';

import { getEvolutionChain } from '../lib/helper/getGeneratePokemonChain';

import cls from './PokemonEvolution.module.scss';

interface ChainObj {
    name: string;
    details: EvolutionDetail | undefined;
}

interface PokemonEvolutionProps{
    url: string;
    curName: string;
    color: string
}

export const PokemonEvolution: FC<PokemonEvolutionProps> = ({ url, curName, color }) => {
    const [chain, setChain] = useState<ChainObj[]>();

    useEffect(() => {
        getEvolutionChain(url).then((data) => setChain(data));
    }, [url]);

    return (
        <div className={cls.evo}>
            {chain?.map((ch) => <EvoCard name={ch.name} key={ch.name} curName={curName} color={color} />)}
        </div>
    );
};
