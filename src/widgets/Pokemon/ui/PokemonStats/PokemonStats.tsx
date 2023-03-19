import { FC } from 'react';
import { colors } from 'shared/lib/constants/colors';
import { getStatPercent } from 'widgets/Pokemon/lib/helpers/getStatPercent';
import { getStatsFromArray } from 'widgets/Pokemon/lib/helpers/getStatsFromArray';

import { pokemonComponentsProps } from '../../types';

import cls from './PokemonStats.module.scss';

export const PokemonStats:FC<pokemonComponentsProps> = ({ pokemon, species }) => {
    const { stats } = pokemon;
    const { color } = species;

    const {
        hp, attack, defence, spDefence, spAttack, speed,
    } = getStatsFromArray(stats);

    const {
        hpPercent,
        defencePercent,
        spDefencePercent,
        spAttackPercent,
        attackPercent,
        speedPercent,
    } = getStatPercent(getStatsFromArray(stats));

    return (
        <div className={cls.statsBlock}>
            <div className={cls.stats}>
                <div className={cls.stat}>
                    <div className={cls.title}>hp</div>
                    <div className={cls.value}>
                        <div
                            className={cls.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${hpPercent + 5}%`,
                            }}
                        >
                            <div className={cls.statValue}>{hp}</div>
                        </div>
                    </div>
                </div>
                <div className={cls.stat}>
                    <div className={cls.title}>attack</div>
                    <div className={cls.value}>
                        <div
                            className={cls.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${attackPercent + 5}%`,
                            }}

                        >
                            <div className={cls.statValue}>{attack}</div>
                        </div>
                    </div>
                </div>
                <div className={cls.stat}>
                    <div className={cls.title}>defence</div>
                    <div className={cls.value}>
                        <div
                            className={cls.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${defencePercent + 5}%`,
                            }}
                        >
                            <div className={cls.statValue}>{defence}</div>
                        </div>
                    </div>
                </div>
                <div className={cls.stat}>
                    <div className={cls.title}>sp. attack</div>
                    <div className={cls.value}>
                        <div
                            className={cls.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${spAttackPercent + 5}%`,
                            }}
                        >
                            <div className={cls.statValue}>{spAttack}</div>
                        </div>
                    </div>
                </div>
                <div className={cls.stat}>
                    <div className={cls.title}>sp. defence</div>
                    <div className={cls.value}>
                        <div
                            className={cls.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${spDefencePercent + 5}%`,
                            }}
                        >
                            <div className={cls.statValue}>{spDefence}</div>
                        </div>
                    </div>
                </div>
                <div className={cls.stat}>
                    <div className={cls.title}>speed</div>
                    <div className={cls.value}>
                        <div
                            className={cls.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${speedPercent + 5}%`,
                            }}
                        >
                            <div className={cls.statValue}>{speed}</div>
                        </div>
                    </div>
                </div>
                <div className={cls.stat}>
                    <div className={cls.totalTitle}>Total</div>
                    <div className={cls.totalValue}>
                        {hp + attack + defence + spAttack + spDefence + speed}
                    </div>
                </div>
            </div>
        </div>
    );
};
