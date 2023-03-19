import { FC, useEffect, useState } from "react";

import { getEvolutionChain } from "../lib/helper/getGeneratePokemonChain";

import { EvoCard } from "entities/EvoCard/model/EvoCard";

import { EvolutionDetail } from "shared/types";

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

export const PokemonEvolution: FC<PokemonEvolutionProps> =
    ({url, curName, color}) => {

    const [chain, setChain] = useState<ChainObj[]>();

    useEffect(() => {
        void getEvolutionChain(url).then((data) => setChain(data));
    }, []);

    return (
        <div className={cls.evo}>
            {chain?.map((ch) => {
                return <EvoCard name={ch.name} key={ch.name} curName={curName} color={color} />;
            })}
        </div>
    );
};