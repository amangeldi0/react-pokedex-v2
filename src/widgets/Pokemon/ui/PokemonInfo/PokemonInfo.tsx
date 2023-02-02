import { FC } from "react";
import { pokemonComponentsProps } from "../../types";

import styles from './PokemonInfo.module.scss';
import {getNormalWeightHeight} from "widgets/Pokemon/lib/helpers/getNormalWeightHeight";
import {classnames} from "shared/lib/helpers/classnames/classnames";
import {PokemonButtonType} from "widgets/Pokemon/ui/PokemonInfo/ui/PokemonButtonType";
import {colors} from "shared/lib/constants/colors";


export const PokemonInfo:FC<pokemonComponentsProps> = ({pokemon, species}) => {


    const {height: h, weight: w, abilities, id, types} = pokemon;
    const {varieties, color} = species

    const {height, weight, lbs, feet} = getNormalWeightHeight(h, w)

    const bg = {
        background: colors[`${color.name}`]
    };

    return (
        <div className={styles.pokemonInfo}>
            <div className={styles.info}>
                <div className={styles.inf}>
                    <div className={styles.label}>ID</div>{' '}
                    <div className={styles.content}>
                        #{id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}`:`${id}`}
                    </div>
                </div>
                <div className={styles.inf}>
                    <div className={styles.label}>Height</div>
                    <div className={styles.content}>
                        {height}m ( {feet} )
                    </div>
                </div>
                <div className={styles.inf}>
                    <div className={styles.label}>Weight</div>
                    <div className={styles.content}>
                        {weight}kg ( {lbs}lbs. )
                    </div>
                </div>
                <div className={styles.inf}>
                    <div className={styles.label}>Abilities</div>
                    <div className={classnames(styles.content, {}, [styles.contentAbility])}>
                        {abilities.map((ability) => (
                            <div
                                key={ability.ability.name}
                                className={styles.ability}
                                style={bg}
                            >
                                {ability.ability.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.inf}>
                    <div className={styles.label}>Type</div>
                    <PokemonButtonType types={types} />
                </div>
                <div className={styles.inf}>
                    <div className={styles.label}>Forms</div>
                    <div className={classnames(styles.content, {}, [styles.contentForm])}>
                        {varieties.map((variety, index) => (
                            index < 3
                                ?
                                <div className={styles.form} style={bg} key={variety.pokemon.name}>
                                    {variety.pokemon.name}
                                </div>
                                : ''
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
