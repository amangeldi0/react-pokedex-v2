import { Stat } from 'shared/types';

export interface statReturn {
    hp: number;
    attack: number;
    defence: number;
    spAttack: number;
    spDefence: number;
    speed: number;
}

export const getStatsFromArray = (stats: Stat[]): statReturn => ({
    hp: stats[0].base_stat,
    attack: stats[1].base_stat,
    defence: stats[2].base_stat,
    spAttack: stats[3].base_stat,
    spDefence: stats[4].base_stat,
    speed: stats[5].base_stat,
});
