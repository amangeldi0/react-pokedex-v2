import axios from 'axios';
import { Chain, Evolution, EvolutionDetail } from 'shared/types';

interface ChainObj {
    name: string;
    details: EvolutionDetail | undefined;
}

export const getEvolutionChain = async (url: string): Promise<ChainObj[]> => {
    const response = await axios(`${url}`);

    const evolutionChain: Evolution = response.data;

    const evolutionArray: ChainObj[] = [];

    function processEvolutionChain(evolution: Chain) {
        const obj: ChainObj = {
            name: evolution.species.name,
            details: evolution.evolution_details[0],
        };
        evolutionArray.push(obj);
        if (evolution.evolves_to.length > 0) {
            evolution.evolves_to.forEach(processEvolutionChain);
        }
    }
    processEvolutionChain(evolutionChain.chain);

    return evolutionArray;
};
