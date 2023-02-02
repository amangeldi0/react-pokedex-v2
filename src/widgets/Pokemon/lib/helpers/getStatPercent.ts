import {statReturn} from '../helpers/getStatsFromArray';

export interface statPercentReturn {
    hpPercent: number;
    attackPercent: number;
    defencePercent: number;
    spAttackPercent: number;
    spDefencePercent: number;
    speedPercent: number;
}

export const MAXSTATS : {
    [key: string]: number
} = {
    maxAttack: 190,
    maxSpeed: 200,
    maxDefence: 250,
    maxHp: 194,
    maxSpeciesAttack: 194,
    maxSpeciesDefence: 250
};

export const getStatPercent = (stats: statReturn): statPercentReturn => {
    const hpPercent = Math.ceil(100 / (MAXSTATS.maxHp / stats.hp));
    const attackPercent = Math.ceil(100 / (MAXSTATS.maxAttack / stats.attack));
    const defencePercent = Math.ceil(100 / (MAXSTATS.maxDefence / stats.defence));
    const spAttackPercent = Math.ceil(100 / (MAXSTATS.maxSpeciesAttack / stats.spAttack));
    const spDefencePercent = Math.ceil(100 / (MAXSTATS.maxSpeciesDefence / stats.spDefence));
    const speedPercent = Math.ceil(100 / (MAXSTATS.maxDefence / stats.defence));

    return {
        hpPercent,
        attackPercent,
        defencePercent,
        spAttackPercent,
        spDefencePercent,
        speedPercent
    };
};
