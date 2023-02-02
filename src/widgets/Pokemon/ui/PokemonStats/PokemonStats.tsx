import { FC } from "react";
import { pokemonComponentsProps } from "../../types";

import styles from './PokemonStats.module.scss';
import {getStatsFromArray} from "widgets/Pokemon/lib/helpers/getStatsFromArray";
import {getStatPercent} from "widgets/Pokemon/lib/helpers/getStatPercent";
import {colors} from "shared/lib/constants/colors";

export const PokemonStats:FC<pokemonComponentsProps> = ({pokemon, species}) => {

    const { stats } = pokemon;
    const { color } = species;

    const { hp, attack, defence, spDefence, spAttack, speed } = getStatsFromArray(stats);

    const {
        hpPercent,
        defencePercent,
        spDefencePercent,
        spAttackPercent,
        attackPercent,
        speedPercent
    } = getStatPercent(getStatsFromArray(stats));


    return (
        <div className={styles.statsBlock}>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <div className={styles.title}>hp</div>
                    <div className={styles.value}>
                        <div
                            className={styles.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${hpPercent + 5}%`}}
                        >
                            <div className={styles.statValue}>{hp}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.title}>attack</div>
                    <div className={styles.value}>
                        <div
                            className={styles.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${attackPercent + 5}%`}}

                        >
                            <div className={styles.statValue}>{attack}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.title}>defence</div>
                    <div className={styles.value}>
                        <div
                            className={styles.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${defencePercent + 5}%`}}
                        >
                            <div className={styles.statValue}>{defence}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.title}>sp. attack</div>
                    <div className={styles.value}>
                        <div
                            className={styles.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${spAttackPercent + 5}%` }}
                        >
                            <div className={styles.statValue}>{spAttack}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.title}>sp. defence</div>
                    <div className={styles.value}>
                        <div
                            className={styles.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${spDefencePercent + 5}%`
                            }}
                        >
                            <div className={styles.statValue}>{spDefence}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.title}>speed</div>
                    <div className={styles.value}>
                        <div
                            className={styles.progressBar}
                            style={{
                                backgroundColor: colors[`${color.name}`],
                                width: `${speedPercent + 5}%` }}
                        >
                            <div className={styles.statValue}>{speed}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.totalTitle}>Total</div>
                    <div className={styles.totalValue}>
                        {hp + attack + defence + spAttack + spDefence + speed}
                    </div>
                </div>
            </div>
        </div>
    );
};
