import {FC, useEffect, useState} from "react";
import {ChainObj} from "../types";
import {getEvolutionChain} from "../lib/helper/getGeneratePokemonChain";
import {EvoCard} from "entities/EvoCard/model/EvoCard";

import styles from './PokemonEvolution.module.scss';


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
        <div className={styles.evo}>
            {chain?.map((ch) => {
                return <EvoCard name={ch.name} key={ch.name} curName={curName} color={color} />;
            })}
        </div>
    );
};